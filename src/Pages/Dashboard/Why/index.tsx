import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Text, Link, Image } from '@chakra-ui/react'
import Card from './Card'
import Empty from './Empty';

const Why: FunctionComponent = (props) => {
  return (
    <Flex
      direction='column'
      w={'100%'}
    >
      <Text
        fontSize={{base:'24px', lg:'42px'}}
        mt='200px'
        mb='60px'
        w='100%'
        fontWeight={'600'}
      >
        Why Fanscee?
      </Text>
      <Flex
        w='100%'
        flexWrap={'wrap'}
      >
        <Card 
          title='SIMPLE'
          description='Fanscee enables a world of NFTs, DAOs, and other new business models'
        />
        <Card 
          title='SCALABLE'
          description='Fanscee delivers extremely fast experiences with extremely low costs'
        />
        <Empty></Empty>
        <Empty></Empty>
        <Card 
          title='ECO-FRIENDLY'
          description='Fanscee aspires to make the most of blockchain, with a minimal carbon footprint'
        />
        <Card 
          title='OPEN'
          description='Fanscee bridges to other ecosystems for easy interoperability'
        />

      </Flex>
    </Flex>
  );
}
export default Why;