import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Text, Link, Image } from '@chakra-ui/react'
import Card from './Card'

const Ecosystem: FunctionComponent = (props) => {
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
        A growing ecosystem
      </Text>
      <Text
        fontSize={{base:'20px', lg:'28px'}}
        mt='15px'
        w='100%'
      >
        Who's building on Fanscee
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
      <Link
        _hover={{textDecoration:'none'}}
        mt='100px'
      >
        <Flex w='100%' justify={'center'}>
        <Flex
          w={{base:'100%', lg:'380px'}}
          h='80px'
          bg='gray'
          justify={'center'}
          align='center'
          position='relative'
          className="innerShadow outerShadow outerShadowHover"
        >
          <Text 
            fontSize='15px'
            color='primary'
            textStyle='secondary'
            letterSpacing={'2.8px'}
          >
             Explore the Waves ecosystem
          </Text>
        </Flex>
        </Flex>
      </Link>
    </Flex>
  );
}
export default Ecosystem;

const data = [
  {
    img: './card-logo-neutrino.svg',
    title: "STABLECOIN",
    description: 'The algorithmic price-stable assetization protocol enables the creation of stablecoins pegged to specific real-world assets, such as national currencies or commodities.',
    tvl: 'TVL: $419 million'
  },
  {
    img: './card-logo-exchange.svg',
    title: "DEX",
    description: 'The automated market maker, based on the Waves Blockchain, which combines several types of liquidity pools for volatile assets and stablecoins.',
    tvl: 'TVL: $151 million'
  },
  {
    img: './card-logo-swop.svg',
    title: "AMM",
    description: 'The next generation of DEX that combines an order book and trading engine with liquidity pools of an automated market maker (AMM)',
    tvl: 'TVL: $8.29 million'
  },
  {
    img: './card-logo-vires.svg',
    title: "LENDING",
    description: 'The Liquidity Protocol for Lending and Borrowing Assets.',
    tvl: 'TVL: $1.3 billion'
  },
  {
    img: './card-logo-waves-ducks.svg',
    title: "NFT GAMING",
    description: 'Waves Ducks is a game focused on collectible digital duck images in the NFT format',
    tvl: 'TVL'
  },
  {
    img: './card-logo-signart.svg',
    title: "NFT MARKETPLACE",
    description: 'SIGN Art is a digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital assets.',
    tvl: ''
  },
  {
    img: './card-logo-puzzle-swap.svg',
    title: "DEX",
    description: 'Decentralized exchange of a newer generation. Trade tokens in multiple mega pools.',
    tvl: ''
  },
]