import useGames, { Platform } from "@/hooks/useGames";
import { Text, SimpleGrid, Card, Skeleton } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "@/hooks/useGeners";

interface Props{
  selectedGenre :Genre | null ;
  selectedPlatform:Platform | null;
}
const GameGrid = ({selectedGenre,selectedPlatform}:Props) => {
  const { data, error, isLoading } = useGames(selectedGenre,selectedPlatform); //this is my custom hook that returns games error and isLoading
  const Sekeletons = [1, 2, 3, 4, 5, 6]; //just to render the sekeletons
  return (
    <>
      {error && <Text>{error}</Text>}{" "}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3, xlTo2xl: 5 }}
        padding={10}
        gap={7}
        
      >
        {isLoading && //to render the skeletons only (glassy effect when it is loaded)
          Sekeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard  game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
