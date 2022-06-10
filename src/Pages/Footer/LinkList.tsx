import React, { FunctionComponent, useEffect, useState } from 'react';
import { HStack, Stack, VStack, Flex, Text, Image, Link, Center, Divider } from '@chakra-ui/react'

interface Props{
  title: string,
  list: any
}
const LinkList: FunctionComponent<Props> = (props) => {
  return (
    <Flex 
      direction='column' 
      minW='150px'
      align='baseline'
      mt='50px'
      // mr={{base:'0px', lg:'100px'}}
    >
      <Text
        fontSize='20px'
      >
        {props.title}
      </Text>
      <VStack mt='30px' spacing='20px' align='baseline'>
        {props.list.map((item: any, index: any) => (
          <Link 
            href={item.href}
            backgroundImage='linear-gradient(to right, rgb(0, 75, 224), rgb(0, 75, 224))'
            backgroundPosition='50% 99%'
            backgroundRepeat='no-repeat'
            backgroundSize='0% 1px'
            color='#0006'
            target="_blank"
            transition='background-size .3s cubic-bezier(.465,.183,.153,.946)'
            _hover={{backgroundSize:'100% 1px', color:'rgb(0, 75, 224)'}}
            _focus={{boxShadow:'none'}}
          >
            <Text 
              fontSize='13px'
              textStyle='secondary'
            >
              {item.label}
            </Text>
          </Link>
        ))}
      </VStack>
    </Flex>
  );
}
export default LinkList;
