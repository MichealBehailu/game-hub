import { Card,Skeleton,SkeletonText} from '@chakra-ui/react'
import React from 'react'

const GameCardSkeleton = () => {
  return (
    <Card.Root width={'300px'} borderRadius={10} overflow={"hidden"}>
        <Skeleton height={'200px'}/>
        <Card.Body>
            <SkeletonText/>
        </Card.Body>
    </Card.Root>
  )
}

export default GameCardSkeleton