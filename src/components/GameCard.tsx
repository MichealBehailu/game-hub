import React from "react";
import PlatformIconList from "./PlatformIconList";
import { Game } from "@/hooks/useGames";
import { Card, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image}/>
      <Card.Body>
        <Heading size={"2xl"}>{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map((p)=>p.platform)}/>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
