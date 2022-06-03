import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Text, Link, Image } from '@chakra-ui/react'
import Card from './Card'

const Start: FunctionComponent = (props) => {
  return (
    <Flex
      direction='column'
      w={'100%'}
    >
      <Text
        fontSize={{base:'24px', lg:'42px'}}
        mt='200px'
        w='100%'
        fontWeight={'600'}
      >
        So, how to start with Fanscee?
      </Text>
      <Flex
        w='100%'
        flexWrap={'wrap'}
        justify='space-between'
        mt='55px'
      >
        {data.map((item, index) => (
          <Card
              item={item}
          />
        ))}
      </Flex>
    </Flex>
  );
}
export default Start;

const data = [
  {
    title: "BUILD",
    subTitle: "ON FANSCEE",
    description: 'Check documentation to start building your first decentralized project',
    url: 'Start building ->',
    href: ''
  },
  {
    title: "APPLY",
    subTitle: "FOR GRANTS",
    description: 'Learn how Fanscee Association can help you get your idea off the ground',
    url: 'Get gramts ->',
    href: ''
  },
  {
    title: "JOIN",
    subTitle: "INCUBATOR",
    description: 'Find funding, friends, and mentorship',
    url: 'Join the incubator ->',
    href: ''
  },
  {
    title: "JOIN",
    subTitle: "OUR COMMUNITY",
    description: 'Need more support, please join our community',
    url: 'Telegram Twitter',
    href: ''
  },
]