import apiClient from '@/Service/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';
import { useEffect, useState } from 'react'

interface FetchResponse<T>{
    count:number
    results:T[]
}

const useData = <T>(endpoint:string, requestConfig ?: AxiosRequestConfig, deps?:any[] ) => { 
          const [data, setData] = useState<T[]>([]);
          const [error, setError] = useState("");
          const [isLoading, setLoading] = useState(false);
        
          useEffect(() => {
            const controller = new AbortController(); //The `controller` is an instance of `AbortController`. It is used to **cancel the API request** if the component unmounts or if the effect is cleaned up before the request finishes.
            setLoading(true);
            apiClient
              .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
              .then((res) => {
                setData(res.data.results);
                setLoading(false);
              })
              .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
              });
        
            return () => controller.abort(); //clean up code
          }, deps?[...deps]:[]);
        
          return { data, error, isLoading };
    
}

export default useData