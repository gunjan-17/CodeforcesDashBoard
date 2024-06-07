import { HStack, IconButton, InputGroup, InputRightElement, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import logo from '../assets/logo.json';
import  ToggleTheme  from './ToggleTheme'
import Lottie from 'lottie-react'
import { useContext, useEffect, useState } from 'react';
import { userContext } from '../App';

const Nav = () => {

  const [ user, setUser ] = useState('');
  const [ input , setInput ] = useState(user);
  const {userHandle, setUserHandle} = useContext(userContext)

  const handleClick = () =>
  {
    setUser(input);
  }

  useEffect(() => {setUserHandle(user)},[user]);

  return (
    <HStack justifyContent={'space-between'}>
        <Lottie animationData={logo} style={{height: '100px', width:'200px'}}/>
        <InputGroup boxShadow='md' width='60%'>
        <Input type='text' value={input} id='input' variant='filled' placeholder='Enter Codeforces Handle' _placeholder={{color: 'gray.400'}} onChange={(e) => {setInput(e.target.value)}}/>
            <InputRightElement>
            <IconButton
                colorScheme='blue'
                aria-label='Search database'
                icon={<SearchIcon/>}
                onClick={handleClick}
            />
            </InputRightElement>
        </InputGroup>
        <ToggleTheme />
    </HStack>
  )
}

export default Nav