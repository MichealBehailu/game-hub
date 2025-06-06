import React from "react";
import PlatformIconList from "./PlatformIconList";
import { Game } from "@/hooks/useGames";
import { Card, HStack, Heading, Image, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "./image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} width={'600px'} height={'300px'}/>
      <Card.Body>
        <Heading size={"2xl"}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
