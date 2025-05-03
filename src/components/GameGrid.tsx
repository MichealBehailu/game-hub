import useGames from "@/hooks/useGames";
import { Text, SimpleGrid, Card, Skeleton } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames(); //this is my custom hook that returns games error and isLoading
  const Sekeletons = [1, 2, 3, 4, 5, 6]; //just to render the sekeletons
  return (
    <>
      {error && <Text>{error}</Text>}{" "}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3, xlTo2xl: 5 }}
        padding={10}
        gap={10}
        spaceY={10}
      >
        {isLoading && //to render the skeletons only (glassy effect when it is loaded)
          Sekeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
