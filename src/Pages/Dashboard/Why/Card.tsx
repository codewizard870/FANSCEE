import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Text, Link, Image } from '@chakra-ui/react'

interface Props{
  title: string,
  description: string,
}
const Card: FunctionComponent<Props> = (props) => {
  return (
    <Flex
      w={{base:'100%', lg:'100%'}}
      maxW={{base:'100%', lg: '300px'}}
      h='280px'
      direction='column'
      m='20px'
      px='24px'
      py='50px'
      className='outerShadow'
    >
      <Text
        textStyle='secondary'
        fontSize='18px'
        color='primary'
      >
        {props.title}
      </Text>
      <Text
        mt='20px'
        textStyle='primary'
        fontSize='20px'
        fontWeight={'400'}
      >
        {props.description}
      </Text>
    </Flex>
  );
}
export default Card;