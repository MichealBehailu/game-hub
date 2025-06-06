import { GameQuery } from "@/App";
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
  rating_top:number
}



const useGames = (gameQuery : GameQuery) => useData<Game>('/games', {
  params:{
    genres: gameQuery.genre?.id, //this is simply means /genres/{id} the same for the below too
    platforms:gameQuery.platform?.id, //  /platforms/{id}
    ordering: gameQuery.sortOrder,
    search:gameQuery.searchText
  }},
  [gameQuery]);

export default useGames;
