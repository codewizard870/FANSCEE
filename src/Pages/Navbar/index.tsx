import React, { FunctionComponent } from 'react';
import { VStack, HStack, Flex, Text, Image, Slide, Box, useDisclosure } from '@chakra-ui/react'
import {MdOutlineMenu, MdClose} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Tab from './Tab'


const TabList = () => {
  return (
    <>
        <Tab id={'about'} >ABOUT FANSCEE</Tab>
        <Tab 
          id={'build'} 
          href='https://docs.waves.tech/en/'
        >
          EARN FANSCEE $
        </Tab>
        <Tab id={'get'} >GET FANSCEE</Tab>
        <Tab 
          id={'roadmap'}
          href='https://fanscee-roadmap.notion.site/fanscee-roadmap/Fanscee-is-Transforming-1-2-f2700b5d1829456e857dd6305ba25ae9'
        >
          ROADMAP  🌊 (1 ➝ 2)
        </Tab>
    </>
  )
}
const Navbar: FunctionComponent = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Flex
      direction={'row'}
      px={{ base:'20px', lg: '190px' }}
      // mr={{sm:'10px', md:'20px', lg:'110px'}}
      mt={'60px'}
      w={'100%'}
      justify={'space-between'}
      align={'center'}
    >
      <Image src='./Fanscee-01.png' w='130px' onClick={()=> navigate("/")} cursor='pointer'/>
      <Flex
        direction='row'
        display={{base:'none', lg:'flex'}}
      >
        <TabList />
      </Flex>
      <HStack
        display={{base:'flex', lg:'none'}}
        color='primary'
        onClick={onToggle}
      >
        <MdOutlineMenu size={'50'} />
      </HStack>
      <Slide direction='right' in={isOpen} style={{ zIndex: 10 }} onClick={onToggle}>
        <Box
          w='80%'
          px='40px'
          pt='25px'
          pb='70px'
          bg='#f0f0f3'
          boxShadow='-10px -10px 30px 0 #fff, 10px 10px 30px 0 hsla(240, 12%, 72%, 0.4)'
          left='20%'
          position='absolute'
        >
          <Flex justify={'flex-end'}>
            <MdClose size='50px' />
          </Flex>
          <VStack spacing='20px' align='baseline' >
            <TabList />
          </VStack>
        </Box>
      </Slide>
    </Flex>
  );
}
export default Navbar;