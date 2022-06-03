import React, { FunctionComponent, useEffect, useState } from 'react';
import { HStack, Stack, VStack, Flex, Text, Image, Link, Center, Divider } from '@chakra-ui/react'

const Footer: FunctionComponent = (props) => {
  const [blockHeight, setBlockHeight] = useState(0); 
  const [timer, setTimer] = useState(0);

  useEffect( () => {
    // async function getLatestHash() {
    //   await lcd.tx.txInfosByHeight(undefined)
    //   .then((e) => {
    //     // setBlockHeight(e[0].height);
    //   })
    // }
    // getLatestHash();
    // if(timer !== 0){
    //   window.clearInterval(timer)
    // }
    // let res = window.setInterval(getLatestHash, 10000);
    // setTimer(res);
  }, []);

  return (
    <Flex
      direction={'row'}
      px={{ sm: '10px', md:'20px', lg: '109px' }}
      pt={'108px'}
      pb={'104px'}
      w={'100%'}
      justify={'space-between'}
      align={'center'}
    >
      <HStack spacing={'5px'}>
        
      </HStack>
    </Flex>
  );
}
export default Footer;