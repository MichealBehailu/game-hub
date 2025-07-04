import useGames from "@/hooks/useGames";
import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "@/App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({gameQuery}: Props) => {
  const { data, error, isLoading } = useGames(gameQuery); //this is my custom hook that returns games error and isLoading
  const Sekeletons = [1, 2, 3, 4, 5, 6]; //just to render the sekeletons
  
  if(error) return <Text>{error}</Text>
  
  return (
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3, xlTo2xl: 4 }}
        padding={10}
        gap={6}
      >
        {isLoading && //to render the skeletons only (glassy effect when it is loaded)
          Sekeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
  );
};

export default GameGrid;
