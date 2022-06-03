import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Text, Link, Image } from '@chakra-ui/react'
import {MdOutlineNavigateNext} from 'react-icons/md';

interface Props{
  item: any
}
const Card: FunctionComponent<Props> = ({item}) => {
  return (
    <Flex
      w={{base:'100%', lg:'250px'}}
      minW={{base:'100%', lg: '250px'}}
      h='351px'
      direction='column'
      mt='20px'
      px='20px'
      pt='50px'
      pb='38px'
      justify={'space-between'}
      className='outerShadow'
    >
      <Flex w='100%' direction='column' align='baseline'>
        <Text
          textStyle='primary'
          fontSize='18px'
          color='primary'
          fontWeight={'700'}
          lineHeight='29px'
        >
          {item.title}
        </Text>
        <Text
          textStyle='primary'
          fontSize='18px'
          color='primary'
          fontWeight={'700'}
          lineHeight='29px'
        >
          {item.subTitle}
        </Text>
        <Text
          mt='20px'
          textStyle='primary'
          fontSize='20px'
          fontWeight={'400'}
        >
          {item.description}
        </Text>
      </Flex>
      <Flex
        justify={'space-between'}
        align='center'
        w='100%'
      >
        <Link href={item.href}>
          <Text
            fontSize='20px'
            color="primary"
          >
            {item.url}
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}
export default Card;