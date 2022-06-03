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
    >
      <Text
        fontSize='20px'
      >
        {props.title}
      </Text>
      <VStack mt='30px' spacing='20px' align='baseline'>
        {props.list.map((item: any, index: any) => (
          <Link href={item.href}>
            <Text 
              fontSize='13px'
              textStyle='secondary'
              color='#0006'
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
