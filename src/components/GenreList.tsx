import useGeners, { Genre } from "@/hooks/useGeners";
import { List, Image, Button,Heading, HStack } from "@chakra-ui/react";
import getCroppedImageUrl from "./image-url";
import GenreSkeletons from "./GenreSkeletons";

interface Props{
  onSelectGenre : (genre : Genre)=>void;
  selectedGenre : Genre | null; //we use this to make the selected genre to be bold or not 
}

const GenreList = ({onSelectGenre, selectedGenre}:Props) => {
  const { data,isLoading} = useGeners();
  const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
  return (
    <>
    {/* {isLoading && <Spinner/> //for the genre skeleton} */}
    {/* {error && null} //we dont need to show error on the side panel */}
    {isLoading && skeletons.map(Skeleton=><GenreSkeletons key={Skeleton}></GenreSkeletons>)}
    <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
    <List.Root>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY={'5px'}>
          <HStack>
            <Image
              boxSize={"32px"}
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius={8}
              objectFit='cover'
            />
            <Button paddingLeft={0} whiteSpace='normal' textAlign="left" fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={()=>onSelectGenre(genre)} fontSize={'lg'} variant={'plain'}>
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
    ))}
    </List.Root>
    </>
  );
};

export default GenreList;
