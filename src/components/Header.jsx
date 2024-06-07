import { Box, Card, CardBody, CardHeader, HStack, Heading, Text, useColorMode } from '@chakra-ui/react'
import Lottie from 'lottie-react'
import headerAnimation from '../assets/animation_lk8bjjyg.json'

const Header = () => {
    const {colorMode} = useColorMode();
    const value = colorMode === 'dark' ? 600 : 200;
    const bg = `linear(to-tr, purple.${value}, cyan.${value}, purple.${value})`
  return (
    <>
    <Card bgGradient={bg} p={4} align={'flex-start'} marginLeft={3} marginRight={3}>
        <HStack>
        <Box >
            <Lottie animationData={headerAnimation} style={{height: '300px'}}/>
        </Box>
        <Box>
            <CardHeader >
                <Heading size='lg'>
                    Welcome!!
                </Heading>
            </CardHeader>
            <CardBody >
                <Text fontSize='2xl'>
                    Please Enter Your CodeForces UserName
                </Text>
            </CardBody>
        </Box>
        </HStack>
    </Card>
    </>
  )
}

export default Header