import React, { FunctionComponent } from 'react';
import { Stack, HStack, Flex, Text, Link, Image } from '@chakra-ui/react'

interface Props {
  direction: string,
  title: string,
  items: any[],
}
const Card: FunctionComponent<Props> = ({ title, items, direction }) => {
  return (
    <Flex
      mt='20px'
      w='100%'
      minH='220px'
      direction='column'
      zIndex='2'
      data-aos="fade-up"
      filter='drop-shadow(-5px -5px 10px #fff) drop-shadow(5px 5px 10px hsla(240, 12%, 72%, 0.4))'
    >
      <Flex
        w='100%'
        h='100%'
        bg='rgb(240, 240, 243)'
        pr={direction == 'right' ? '58px' : '0px'}
        pl={direction == 'right' ? '0px' : '58px'}
        clipPath={direction == 'right' ? 'polygon(0 0,calc(100% - 3.625rem) 0,100% 30%,100% 70%,calc(100% - 3.625rem) 100%,0 100%);' : 'polygon(0 30%,3.625rem 0,100% 0,100% 100%,3.625rem 100%,0 70%)'}
      >
        <Flex
          w='100%'
          h='100%'
          p='35px 18px 20px 28px'
          direction='column'
        >
          <Text
            textStyle='secondary'
            fontSize={{ base: '20px', lg: '24px' }}
            fontWeight={'400'}
          >
            {title}
          </Text>
          <Flex flexWrap={'wrap'} w='100%' mt='10px'>
            {items.map((item, index) => (
              <HStack spacing='10px' mr='20px' lineHeight={'40px'}>
                <Image src={item.img} w='20px' />
                <Link
                  href={item.href}
                  backgroundImage='linear-gradient(to right, rgb(0, 75, 224), rgb(0, 75, 224))'
                  backgroundPosition='50% 99%'
                  backgroundRepeat='no-repeat'
                  backgroundSize='0% 1px'
                  color='#0006'
                  transition='background-size .3s cubic-bezier(.465,.183,.153,.946)'
                  _hover={{ backgroundSize: '100% 1px', color: 'rgb(0, 75, 224)' }}
                >
                  <Text
                    fontSize={{ base: '16px', lg: '20px' }}
                    color="primary"
                  >
                    {item.label}
                  </Text>
                </Link>
              </HStack>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex >
  );
}
export default Card;