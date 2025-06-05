import { Flex, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGeners";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery { //instead of selectedGenre or selectedPlatform we can use this genric for both
  genre : Genre | null;
  platform : Platform | null;
  sortOrder : string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      {/* NavBar */}
      <GridItem area="nav" padding="2" boxShadow="md">
        <NavBar />
      </GridItem>

      {/* Aside - hidden on small screens */}
      <GridItem
        area="aside"
        padding="2"
        marginX={0.5}
        display={{ base: "none", lg: "block" }}
        marginY={7}
      >
        <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) =>setGameQuery({...gameQuery,genre})}/>
      </GridItem>
      {/* Main */}
      <GridItem area="main" padding="2">
        <Flex spaceX={5} paddingLeft={"10"} marginBottom={5}>
          <PlatformSelector selectedPlatform={gameQuery.platform} OnselectPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSort={(sortOrder)=>setGameQuery({...gameQuery, sortOrder})}/>
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
