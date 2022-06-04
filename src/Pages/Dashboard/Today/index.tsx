import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Text, Link, Image } from '@chakra-ui/react'
import Card from './Card'
import Empty from './Empty';

const Today: FunctionComponent = (props) => {
  return (
    <Flex
      direction='column'
      w={'100%'}
    >
      <Text
        fontSize={{base:'24px', lg:'42px'}}
        mt='200px'
        w='100%'
        fontWeight={'600'}
        data-aos="fade-up"
      >
        Fanscee Today
      </Text>
      <Text
        fontSize={{base:'20px', lg:'28px'}}
        mt='15px'
        w='100%'
        data-aos="fade-up"
      >
        The latest network statistics
      </Text>
      <Flex
        w='100%'
        flexWrap={'wrap'}
        justify='space-between'
        mt='55px'
      >
        <Image 
          src='./Path1.svg' 
          position='absolute' 
          left='0px' 
          display={{base:'none', lg:'block'}} 
          data-aos="fade-up"
        />
        <Card 
          title='64'
          description='Global Rank'
        />
        <Card 
          title='$1.8bn'
          description='Value locked in DeFi (USD)'
        />
        <Card 
          title='48.6k'
          description='Daily Transactions'
        />
        <Card 
          title='260m'
          description='Total Transactions'
        />
        <Empty/>
      </Flex>
      <Flex
        w='100%'
        flexWrap={'wrap'}
        justify='space-between'
        mt={{base:'0px', lg:'193px'}}
      >
        <Empty/>
        <Card 
          title='$10.1'
          description='FANSCEE Price (USD)'
        />
        <Card 
          title='$0.010'
          description='Avg. cost per transaction'
        />
        <Card 
          title='108m'
          description='Circulating supply (FANSCEE)'
        />
        <Card 
          title='53.0%'
          description='Tokens staked'
        />
      </Flex>
      <Link
        _hover={{textDecoration:'none'}}
        mt='100px'
      >
        <Flex w='100%' justify={'center'}>
        <Flex
          w={{base:'100%', lg:'380px'}}
          h='80px'
          bg='gray'
          justify={'center'}
          align='center'
          position='relative'
          className="innerShadow outerShadow outerShadowHover"
        >
          <Text 
            fontSize='14px'
            color='primary'
            textStyle='secondary'
            letterSpacing={'2.8px'}
          >
            GET FANSCEE
          </Text>
        </Flex>
        </Flex>
      </Link>
    </Flex>
  );
}
export default Today;