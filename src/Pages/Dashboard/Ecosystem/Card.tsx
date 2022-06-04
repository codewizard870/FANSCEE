import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Text, Link, Image } from '@chakra-ui/react'
import {MdOutlineNavigateNext} from 'react-icons/md';

interface Props{
  item: any
}
const Card: FunctionComponent<Props> = ({item}) => {
  return (
    <Flex
      w={{base:'100%', lg:'340px'}}
      minW={{base:'100%', lg: '340px'}}
      h='385px'
      direction='column'
      mt='20px'
      px='24px'
      pt='28px'
      pb='20px'
      justify={'space-between'}
      data-aos="fade-up"
      className='outerShadow'
    >
      <Flex w='100%' direction='column' align='baseline'>
        <Flex h='42px'>
          <Image src={item.img} maxHeight='42px'/>
        </Flex>
        <Text
          mt='20px'
          textStyle='secondary'
          fontSize='18px'
          color='primary'
        >
          {item.title}
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
        <Text
          fontSize='24px'
        >
          {item.tvl}
        </Text>
        <Flex
          w='56px'
          h='56px'
          rounded='50%'
          position='relative'
          className="outerShadow outerShadowHover innerShadow"
          color='primary'
        >
          <MdOutlineNavigateNext size='56px' />
        </Flex>
      </Flex>
    </Flex>
  );
}
export default Card;