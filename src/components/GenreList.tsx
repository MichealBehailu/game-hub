import useGeners from "@/hooks/useGeners";
import { List, ListItem, HStack, Image,Text } from "@chakra-ui/react";
import React from "react";
import getCroppedImageUrl from "./image-url";

const GenreList = () => {
  const { data } = useGeners();
  return (
    <List.Root>
      {data.map((d) => (
        <List.Item key={d.id} paddingY={'5px'}>
          <HStack>
            <Image
              boxSize={"32px"}
              src={getCroppedImageUrl(d.image_background)}
              borderRadius={8}
            />
            <Text fontSize={'lg'}>
              {d.name}
            </Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
