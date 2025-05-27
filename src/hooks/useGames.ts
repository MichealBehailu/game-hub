import useData from "./useData";
import { Genre } from "./useGeners";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  //interface to guide the fetch (FetchGameResponse when we store it in array)
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; //here the parent_platform is an array of object where each object has platform property and that property is of type Platform (means not destructuring)
  metacritic: number;
}



const useGames = (selectedGenre:Genre | null) => useData<Game>('/games', {params:{genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGames;
