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
      background={'rgb(240, 240, 243)'}
      justify={'center'}
      w={'100%'}
    >
      <Flex
        direction='column'
        textStyle='primary'
        fontWeight='400'
        color={'#121212'}
        // maxWidth={'1440px'}
        w = {'100%'}
      >
        <Navbar />
        <Outlet />
        <Footer />
      </Flex>
    </Flex>
  )
};
export default Layout;
