import { Card, Image, Skeleton, VStack } from '@chakra-ui/react'
import animations from '../assets/ImgNotFound.json'
import Lottie from 'lottie-react'

const TitlePhoto = ({titlePhoto, error, loading }) => {
    
  if(error === !null || titlePhoto === null || titlePhoto === 'https://userpic.codeforces.org/no-title.jpg')
  {
    return (
      <>
      <Card align={'center'} bg={'transparent'} boxShadow={0}>
      <Lottie animationData={animations} style={{height: '400px', width: '229px'}}/>
      </Card>
      </>
    );
  }

  else{
    return ( 
      <>
        <Skeleton isLoaded={!loading}>
          <VStack>
          <Image 
          src={titlePhoto}
          borderRadius='10'
          m={'auto'}   
          />
          <p>Profile Picture</p>
          </VStack>
        </Skeleton>
      </>
  )
}

  }

  
export default TitlePhoto