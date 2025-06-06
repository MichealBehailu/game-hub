
import PlatformIconList from "./PlatformIconList";
import { Game } from "@/hooks/useGames";
import { Card, HStack, Heading, Image } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "./image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)}/>
      <Card.Body>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading size={"2xl"}>{game.name}<Emoji rating={game.rating_top} /></Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
