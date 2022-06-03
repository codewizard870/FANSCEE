import React, { FunctionComponent, useEffect, useState } from 'react';
import { HStack, Stack, VStack, Flex, Text, Image, Link, Center, Divider } from '@chakra-ui/react'
import LinkList from './LinkList'

const Footer: FunctionComponent = (props) => {
  return (
    <Flex
      direction={'column'}
      px={{base:'20px', lg:'190px'}}
      pt={'108px'}
      pb={'104px'}
      w={'100%'}
      align={'center'}
    >
      <Flex
        justify={'space-between'}
        w='100%'
        flexWrap={'wrap'}
      >
        <LinkList
          title='Use Fanscee'
          list={useFanscee}
        />
        <LinkList
          title='Build'
          list={build}
        />
        <LinkList
          title='Ecosystem'
          list={ecosystem}
        />
        <LinkList
          title='Socials'
          list={socials}
        />
      </Flex>
      <Divider orientation='horizontal' />
    </Flex>
  );
}
export default Footer;

const useFanscee = [ 
  { 
    label: "ABOUT FANSCEE",
    href: ''
  },
  { 
    label: "GET FANSCEE", 
    href: ''
  },
  {
    label: "EXPLORER", 
    href: ''
  },
  {
    label:"🌊 (1 ➝ 2)" ,
    href: ''
  }
];
const build = [ 
  { 
    label: "DOCUMENTATION",
    href: ''
  },
  { 
    label: "GITHUB", 
    href: ''
  },
  {
    label: "INCUBATOR", 
    href: ''
  },
  {
    label:"GRANTS" ,
    href: ''
  }
];
const ecosystem= [
  { 
    label: "DAO",
    href: ''
  },
  { 
    label: "CONTACT", 
    href: ''
  },
  {
    label: "LABS", 
    href: ''
  },
];
const socials= [
  { 
    label: "TWITTER",
    href: ''
  },
  { 
    label: "TELEGRAM", 
    href: ''
  },
  {
    label: "MEDIUM", 
    href: ''
  },
];