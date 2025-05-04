import { HStack, List, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GenreSkeletons = () => {
  return (
    <List.Root>
        <List.Item paddingY={'5px'} >
            <HStack>
            <Skeleton width={"32px"} height="20px" />
            <SkeletonText fontSize={'lg'} noOfLines={1}></SkeletonText>
            </HStack>
        </List.Item>
    </List.Root>
  )
}

export default GenreSkeletons