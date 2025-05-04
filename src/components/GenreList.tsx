import useGeners from "@/hooks/useGeners";
import { List, ListItem, HStack, Image,Text, Spinner, Skeleton } from "@chakra-ui/react";
import React from "react";
import getCroppedImageUrl from "./image-url";
import GenreSkeletons from "./GenreSkeletons";

const GenreList = () => {
  const { data,isLoading,error} = useGeners();
  const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
  return (
    <>
    {/* {isLoading && <Spinner/> //for the genre skeleton} */}
    {/* {error && null} //we dont need to show error on the side panel */}
    {isLoading && skeletons.map(Skeleton=><GenreSkeletons key={Skeleton}></GenreSkeletons>)}

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
    </>
  );
};

export default GenreList;
