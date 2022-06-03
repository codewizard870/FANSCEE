import React, { FunctionComponent } from 'react';
import { Stack, Flex } from '@chakra-ui/react'

import Tab from './Tab'

const Navbar: FunctionComponent = (props) => {
  return (
    <Flex
      direction={'row'}
      px={{ sm: '10px', md:'20px', lg: '109px' }}
      // mr={{sm:'10px', md:'20px', lg:'110px'}}
      mt={'50px'}
      mb={'50px'}
      w={'100%'}
      justify={'space-between'}
      align={'center'}
    >
      <Stack
        direction={{ sm: 'column', md:'row', lg: 'row' }}
        spacing={'0px'}
      >
        <Tab id={'dashboard'} >ABOUT WAVES</Tab>
        <Tab id={'build'} >BUILD</Tab>
        <Tab id={'get'} >GET WAVES</Tab>
        <Tab id={'roadmap'} >ROADMAP  🌊 (1 ➝ 2)</Tab>
      </Stack>
    </Flex>
  );
}
export default Navbar;