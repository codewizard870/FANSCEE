import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Text, Link, Image } from '@chakra-ui/react'

interface Props{
  title: string,
  description: string,
}
const Card: FunctionComponent<Props> = (props) => {
  return (
    <Flex
      mt='20px'
      w='240px'
      direction='column'
      mr={{base:'10px', lg:'40px'}}
      zIndex={'2'}
      data-aos="fade-up"
    >
      <Flex
        rounded='50%'
        className='outerShadow'
        w='240px'
        h='240px'
        justify='center'
        align='center'
      >
        <Text
          textStyle='secondary'
          fontSize='70px'
          fontWeight={'400'}
          color='primary'
        >
          {props.title}
        </Text>
      </Flex>
      <Text
        mt='28px'
        fontSize='28px'
        textAlign={'center'}
      >
        {props.description}
      </Text>
    </Flex>
  );
}
export default Card;