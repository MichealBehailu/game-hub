import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGeners";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null) //this used for rendring games using genre 
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null); //this stores the selected platform type from the dropdown
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
        <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) =>setSelectedGenre(genre)}/>
      </GridItem>
      {/* Main */}
      <GridItem area="main" padding="2">
        <PlatformSelector selectedPlatform={selectedPlatform} OnselectPlatform={(platform)=>setSelectedPlatform(platform)}/>
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
