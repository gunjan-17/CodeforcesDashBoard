import React from 'react'
import { useContext } from 'react'
import { userContext } from '../App'
import { Box, Card, Grid, GridItem, VStack } from '@chakra-ui/react'
import TitlePhoto from './TitlePhoto'
import Info from './Info'
import RatingInfo from './RatingInfo'
import Lottie from 'lottie-react'
import noData from '../assets/noDataEntered.json'

const User = ({titlePhoto, error, loading, firstName, lastName, country, city, organization, friends, email, regdate, rank, maxRank , rating, maxRating }) => {

  const {userHandle, setUserHandle} = useContext(userContext)

    if(userHandle === '')
    {
      return <Card align={'center'} bg={'transparent'} boxShadow={0}>
        <VStack>
          <Box boxShadow={0}>
          <Lottie animationData={noData} style={{height: '400px', width:'400px'}}/>
          </Box>
          <Box fontSize={'30px'}>
            No Data Entered
          </Box>
        </VStack>
      </Card>
    }

    else{
      return (
        <Card margin={3} bg={'inherit'}
        fontFamily={'Libre Baskerville'}
        boxShadow={0}
        >
          <Grid templateAreas={{base:`"avatar" "userinfo" "userrating"`,
                                md: `"avatar userinfo" "userrating userrating"`}} 
                                gap={2}
                                >
          <GridItem area='avatar'>
            <TitlePhoto 
            titlePhoto={titlePhoto}
            error={error} 
            loading={loading}/>
          </GridItem>
          <GridItem area='userinfo'>
            <Info 
            firstName={firstName} 
            lastName={lastName} 
            country={country} 
            city={city}
            organization={organization} 
            friends={friends} 
            email={email} 
            regdate={regdate}
            loading={loading}
            error={error}/></GridItem>
          <GridItem area='userrating' >
            <RatingInfo
            rank={rank}
            maxRank={maxRank}
            rating={rating}
            maxRating={maxRating}
            loading={loading}
            /></GridItem>
          </Grid>
        </Card>
      )
    }
    
  }

  


export default User