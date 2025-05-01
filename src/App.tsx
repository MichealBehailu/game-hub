import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import "./App.css";
import ColorModeSwitch from "./components/ColorModeSwitch";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      {/* NavBar */}
      <GridItem
        area="nav"
        padding="2"
        boxShadow="md"
       
      >
        
        <NavBar />
      </GridItem>

      {/* Aside - hidden on small screens */}
      <GridItem
        area="aside"
        
        padding="2"
        display={{ base: "none", lg: "block" }}
      >
        Aside
      </GridItem>
      {/* Main */}
      <GridItem area="main"  padding="2">
      <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
