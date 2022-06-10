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
        {/* <LinkList
          title='Build'
          list={build}
        /> */}
        <LinkList
          title='Ecosystem'
          list={ecosystem}
        />
        <LinkList
          title='Socials'
          list={socials}
        />
      </Flex>
      <Divider orientation='horizontal' mt='50px' />
      <Stack
        direction={{base: 'column', lg: 'row'}}
        w='100%'
        mt='50px'
        mb='100px'
        align={{base: 'center', lg:'baseline'}}
        spacing='20px'
      >
        {policy.map((item, index) => (
          <Link
            href = {item.href}
            target="_blank"
            color='#0006'
            _hover={{color:'rgb(0, 75, 224)'}}
          >
            <Text
              fontSize='14px'
            >
              {item.label}
            </Text>
          </Link>
        ))}
      </Stack>
    </Flex>
  );
}
export default Footer;

const useFanscee = [ 
  { 
    label: "ABOUT FANSCEE",
    href: '/about'
  },
  { 
    label: "GET FANSCEE", 
    href: '/get'
  },
  {
    label: "EXPLORER", 
    href: '/'
  },
  {
    label:"🌊 (1 ➝ 2)" ,
    href: 'https://fanscee-roadmap.notion.site/fanscee-roadmap/Fanscee-is-Transforming-1-2-f2700b5d1829456e857dd6305ba25ae9'
  }
];
// const build = [ 
//   { 
//     label: "DOCUMENTATION",
//     href: ''
//   },
//   { 
//     label: "GITHUB", 
//     href: ''
//   },
//   {
//     label: "INCUBATOR", 
//     href: ''
//   },
//   {
//     label:"GRANTS" ,
//     href: ''
//   }
// ];
const ecosystem= [
  { 
    label: "DAO",
    href: 'https://wavesassociation.org/'
  },
  { 
    label: "CONTACT", 
    href: 'mailto:press@waves.tech'
  },
  {
    label: "LABS", 
    href: 'https://waveslabs.com/'
  },
];
const socials= [
  { 
    label: "TWITTER",
    href: 'https://twitter.com/wavesprotocol'
  },
  { 
    label: "TELEGRAM", 
    href: 'https://t.me/wavesnews'
  },
  {
    label: "MEDIUM", 
    href: 'https://medium.com/wavesprotocol'
  },
];
const policy = [
  { 
    label: "@2022 Fanscee",
    href: ''
  },
  { 
    label: "Privacy Policy",
    href: 'https://waves.tech/docs/privacy-policy'
  },
  { 
    label: "Cookie Policy", 
    href: 'https://waves.tech/docs/cookie-policy'
  },
  {
    label: "Terms of Service", 
    href: 'https://waves.tech/docs/terms'
  },
];