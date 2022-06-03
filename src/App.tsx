import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VStack, Flex, useDisclosure, useEventListenerMap } from '@chakra-ui/react'

import Layout from './Layout';
import Dashboard from './Pages/Dashboard'

declare let document: any;

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Flex 
        w='100%' 
        h='100%' 
        display={loading ? 'none' : 'flex'}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="*" element={"404"} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Flex>
      <Flex 
        w='100%' 
        h='100vh' 
        justify='center' 
        align='center' 
        bg='black' 
        position='absolute'
        display={loading ? 'flex' : 'none'}
        top='0px'
        zIndex='99999999'
      >
        <video width="100%" autoPlay muted>
          <source src="./PRE LOADING WEB.mp4" type="video/mp4" />
        </video>
      </Flex>
    </>
  );
}

export default App;
