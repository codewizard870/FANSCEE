import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Text, Link, Image } from '@chakra-ui/react'
import Overview from './Overview';
import Why from './Why';
import Today from './Today';
import Ecosystem from './Ecosystem';
import Start from './Start';

const Dashboard: FunctionComponent = (props) => {
  return (
    <Flex
      direction='column'
      mt={'160px'} 
      px={{base:'20px', lg:'190px'}}
      w={'100%'}
    >
      <Overview />
      <Why />
      <Today />
      <Ecosystem />
      <Start />
    </Flex>
  );
}
export default Dashboard;