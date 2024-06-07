import { Card, Grid, GridItem, Skeleton, Stack, StackDivider, Box, CardHeader } from '@chakra-ui/react'
import React from 'react'
import Rating from './Rating'
const RatingInfo = ({ rank, maxRank , rating, maxRating, loading }) => {
  return (
    <Grid templateAreas={{base:`"info" "gauge"`, lg: `"gauge info" "gauge info"`}} gap={3}>
        <GridItem area={"gauge"}>
            <Skeleton isLoaded={!loading} align={'center'}>
            <Card boxShadow={0}>
                <Rating rating={rating}/>
            </Card>
            </Skeleton>
        </GridItem>
        <GridItem area={"info"}>
        <Skeleton isLoaded={!loading}>
            <Card boxShadow={0}>
                <CardHeader>
                    User Rating & Stats
                </CardHeader>
                
                <Stack divider={<StackDivider/>} padding={4} >
                    
                    <Box>
                        Rank: {rank}
                    </Box>
                    <Box>
                        Rating: {rating}
                    </Box>
                    <Box>
                        Maximum Rank: {maxRank}
                    </Box>
                    <Box>
                        Maximum Rating: {maxRating}
                    </Box>
                    
                </Stack>
               
            </Card>
            </Skeleton>
        </GridItem>

    </Grid>

  )
}

export default RatingInfo