import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Text, Link, Image } from '@chakra-ui/react'
import Card from './Card'

const Overview: FunctionComponent = (props) => {
  return (
    <Stack
      direction={{base: 'column-reverse', lg:'row'}}
      w={'100%'}
      spacing='50px'
    >
      <VStack 
        w={{base:'100%', lg:'55%'}} 
        minW={{base:'100%', lg:'55%'}} 
        spacing='50px' 
        align='baseline'
        justify={'center'}
      >
        <Text
          fontSize={{base:'24px', lg:'42px'}}
          fontWeight='600'
          w='100%'
          data-aos="fade-up"
        >
          Where to buy Fanscee
        </Text>
        <Text
          fontSize={{base:'20px', lg:'28px'}}
          fontWeight='400'
          mt='50px'
          w='100%'
          data-aos="fade-up"
        >
          <b>Fanscee</b> is the native token of the Waves blockchain and is used to secure the network through staking, pay for fees
        </Text>
      </VStack>
      <Flex w={{base:'100%', lg:'530px'}} justify='center' align='center'>
        <Card
          title='$8.54'
          description="Current FANSCEE price"
        />
      </Flex>
    </Stack>
  );
}
export default Overview;