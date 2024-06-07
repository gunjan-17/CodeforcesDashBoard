import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

const ToggleTheme = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const color = () => {
      return colorMode === 'dark' ? 'Dark': 'Light'
    }
  return (
    <HStack padding={4} >
        <Switch onChange={toggleColorMode} colorScheme='green'/>
        <Text>{color()}</Text>
    </HStack>
    
  )
}


export default ToggleTheme