import apiClient from "@/Service/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Platform{
  id:number
  name:string
  slug:string
}

export interface Game {
    //interface to guide the fetch (FetchGameResponse when we store it in array)
    id: number;
    name: string;
    background_image:string;
    parent_platforms: {platform:Platform}[]
    metacritic: number
  }
  
  interface FetchGameResponse {
    //what we want from the response count and results are the from response exactly the same name with the response elements
    count: number;
    results: Game[];
  }

const useGames = ()=>{
      const [games, setGames] = useState<Game[]>([]);
      const [error, setError] = useState("");
    
      useEffect(() => {
        const controller = new AbortController()
     apiClient
          .get<FetchGameResponse>("/games",{signal:controller.signal})
          .then((res) => setGames(res.data.results))
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)});
      
        return ()=>controller.abort() //clean up code
        }, []);      

        return {games,error}
      
}

export default useGames