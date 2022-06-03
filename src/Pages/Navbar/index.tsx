import React, { FunctionComponent } from 'react';
import { VStack, HStack, Flex, Text, Image } from '@chakra-ui/react'

import Tab from './Tab'

const Navbar: FunctionComponent = (props) => {
  return (
    <Flex
      direction={'row'}
      px={{ base:'20px', lg: '190px' }}
      // mr={{sm:'10px', md:'20px', lg:'110px'}}
      mt={'60px'}
      w={'100%'}
      justify={'space-between'}
      align={'center'}
    >
      <Image src='./Fanscee-01.png' w='130px' />
      <Flex
        direction='row'
        display={{base:'none', lg:'flex'}}
      >
        <Tab id={'dashboard'} >ABOUT FANSCEE</Tab>
        <Tab id={'build'} >BUILD</Tab>
        <Tab id={'get'} >GET FANSCEE</Tab>
        <Tab id={'roadmap'} >ROADMAP  🌊 (1 ➝ 2)</Tab>
      </Flex>
      <HStack
        display={{base:'flex', lg:'none'}}
      >
        <Text> O </Text>
      </HStack>
    </Flex>
  );
}
export default Navbar;