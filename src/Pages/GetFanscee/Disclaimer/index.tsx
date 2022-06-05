import React, { FunctionComponent } from 'react';
import { Stack, HStack, Flex, Text, Link, Image } from '@chakra-ui/react'

const Disclaimer: FunctionComponent = (props) => {
  return (
    <Flex w='100%' mt='100px' direction='column'>
      <Text
        fontSize={{base:'24px', lg:'42px'}}
        fontWeight='600'
        w='100%'
        textAlign={'center'}
        data-aos="fade-up"
      >
        Disclaimer
      </Text>
      <Text
        fontSize={{base:'24px', lg:'28px'}}
        w='100%'
        textAlign={'center'}
        mt='20px'
      >
        All exchanges, wallets and DEXs listed on this page are not official endorsements, and are provided for informational purposes only.
      </Text>
    </Flex>
  );
}
export default Disclaimer;
