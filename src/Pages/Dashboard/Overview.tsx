import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Text, Link, Image } from '@chakra-ui/react'

const Overview: FunctionComponent = (props) => {
  return (
    <Flex
      w={'100%'}

    >
      <VStack 
        w={{base:'100%', lg:'75%'}} 
        minW={{base:'100%', lg:'75%'}} 
        spacing='50px' 
        align='baseline'
      >
        <Text
          fontSize={{base:'24px', lg:'42px'}}
          mb='44px'
          w='100%'
          data-aos="fade-up"
        >
          <b>Fanscee</b> is a community-based stack of decentralized open-source technologies to build scalable, user-friendly apps
        </Text>
        <Link
          _hover={{textDecoration:'none'}}
          w='100%'
        >
          <Flex
            w={{base:'100%', lg:'380px'}}
            h='80px'
            bg='gray'
            justify={'center'}
            align='center'
            position='relative'
            className="innerShadow outerShadow outerShadowHover"
            data-aos="fade-up"
          >
            <Text 
              fontSize='14px'
              color='primary'
              textStyle='secondary'
              letterSpacing={'2.8px'}
            >
              START BUILDING
            </Text>
          </Flex>
        </Link>
      </VStack>
      <Flex w='530px' display={{base:'none', lg:'flex'}}>
        <Image src='./radar.svg' w='534px' position='absolute'  animation='spin 12s linear infinite'/>
      </Flex>
    </Flex>
  );
}
export default Overview;