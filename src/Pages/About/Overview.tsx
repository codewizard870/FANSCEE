import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Text, Link, Image } from '@chakra-ui/react'

const Overview: FunctionComponent = (props) => {
  return (
    <Flex
      w={'100%'}
      mb='50px'
    >
      <VStack 
        w={{base:'100%', lg:'65%'}} 
        minW={{base:'100%', lg:'65%'}} 
        spacing='50px' 
        align='baseline'
      >
        <Text
          fontSize={{base:'24px', lg:'42px'}}
          fontWeight='600'
          w='100%'
          data-aos="fade-up"
        >
          Fast, Low Cost & Eco-Friendly. Fanscee
        </Text>
        <Text
          fontSize={{base:'16px', lg:'20px'}}
          fontWeight='400'
          mt='50px'
          w='100%'
          data-aos="fade-up"
        >
          Launched in 2016, Fanscee is a global open-source platform for decentralized applications. Based on proof-of-stake consensus, Fanscee aspires to make the most of blockchain, with minimal carbon footprint.
          <br/><br/><br/>
          Fanscee technology stack can benefit in any use cases that demand security and decentralization — open finance, personal identification, gaming, sensitive data and many others.
        </Text>
      </VStack>
      <Flex w='530px' display={{base:'none', lg:'flex'}} data-aos="fade-up">
        <Image src='./Radar.svg' w='534px' position='absolute'  animation='spin 12s linear infinite'/>
      </Flex>
    </Flex>
  );
}
export default Overview;