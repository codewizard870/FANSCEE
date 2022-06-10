import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Text, Link, Image } from '@chakra-ui/react'

const StartBuilding: FunctionComponent = (props) => {
  return (
    <Flex
      direction='column'
      mt={{base:'20px', lg:'100px'}}
      px={{base:'20px', lg:'190px'}}
      w={'100%'}
    >
      <Text
        fontSize={{base:'24px', lg:'42px'}}
        fontWeight='600'
        w='100%'
        data-aos="fade-up"
      >
        Community building with FANSCEE begins Q1 2023
      </Text>
      <Text
        fontSize={{base:'20px', lg:'28px'}}
        mt='15px'
        w='100%'
        data-aos="fade-up"
      >
        Fanscee enables a world of NFTs, DAOs, P2E Games, and other new business models.
      </Text>
    </Flex>
  );
}
export default StartBuilding;