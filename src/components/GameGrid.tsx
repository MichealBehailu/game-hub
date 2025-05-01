import useGames from "@/hooks/useGames";
import { Text,SimpleGrid, Card } from "@chakra-ui/react";
import GameCard from "./GameCard";



const GameGrid = () => {
    const {games, error} = useGames()

  return (
    <>
      {error && <Text>{error}</Text>}{" "}
      <SimpleGrid columns={{sm:1,md:2,lg:3,xl:3,xlTo2xl:5}} padding={10} gap={10} spaceY={10} >
        {games.map((game) => (
          <GameCard key={game.id} game={game}/>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
