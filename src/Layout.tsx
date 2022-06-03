import React, { useEffect, useMemo } from 'react'
import { Outlet, Link } from "react-router-dom";
import { VStack, Flex, useDisclosure, useEventListenerMap } from '@chakra-ui/react';
import axios from 'axios';

import { useStore } from './store';
import Navbar from './Pages/Navbar'
import Footer from "./Pages/Footer";

declare let window: any;

const Layout = () => {
  return (
    <Flex
      background={'gray'}
      justify={'center'}
      w={'100%'}
    >
      <VStack
        fontFamily={'SF UI Text'}
        fontStyle={'normal'}
        letterSpacing={'-0.06em'}
        spacing={'10px'}
        color={'white'}
        maxWidth={'1440px'}
        w = {'100%'}
      >
        <Navbar />
        <Outlet />
        <Footer />
      </VStack>
    </Flex>
  )
};
export default Layout;
