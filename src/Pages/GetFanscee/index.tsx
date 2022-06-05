import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Text, Link, Image } from '@chakra-ui/react'
import Overview from './Overview';
import Market from './Market';
import WhereToBuy from './WhereToBuy';
import Disclaimer from './Disclaimer';

const GetFanscee: FunctionComponent = (props) => {
  return (
    <Flex
      direction='column'
      mt={{base:'20px', lg:'100px'}}
      px={{base:'20px', lg:'190px'}}
      w={'100%'}
    >
      <Overview />
      <Market />
      <WhereToBuy />
      <Disclaimer />
    </Flex>
  );
}
export default GetFanscee;