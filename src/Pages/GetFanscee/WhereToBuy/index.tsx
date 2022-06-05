import React, { FunctionComponent } from 'react';
import { Stack, HStack, Flex, Text, Link, Image } from '@chakra-ui/react'
import Card from './Card'

const WhereToBuy: FunctionComponent = (props) => {
  return (
    <Flex w='100%' mt='100px' direction='column'>
      <Text
        fontSize={{base:'24px', lg:'42px'}}
        fontWeight='600'
        w='100%'
        data-aos="fade-up"
      >
        Where to buy
      </Text>
      <Stack
        direction={{base:'column', lg:'row'}}
        spacing='10px' 
        w='100%' 
        mt='50px'
      >
        <Flex direction='column'>
          <Card
            direction="right" 
            title="Decentralized Exchanges"
            items={decentralized_items}
          />
          <Card
            direction="right"
            title="Wallets"
            items={wallets_items}
          />
        </Flex>
        <Flex direction='column' minW='50%'
          justify={'center'}
        >
          <Card
            direction="left" 
            title="Centralized Exchanges"
            items={centralized_items}
          />
        </Flex>
      </Stack>
    </Flex>
  );
}
export default WhereToBuy;

const decentralized_items: any[] = [
  {
    label: "Fanscee Exchange",
    href: "",
    img: './Fanscee-02.png'
  }
];

const centralized_items: any[] = [
  {
    label: "Binance",
    href: "",
    img: './Exchanges/binance-icon.svg'
  },
  {
    label: "Okex",
    href: "",
    img: './Exchanges/okex-icon.svg'
  },
  {
    label: "Bithumb",
    href: "",
    img: './Exchanges/bithumb-icon.svg'
  },
  {
    label: "Kraken",
    href: "",
    img: './Exchanges/kraken-icon.svg'
  },
  {
    label: "Huobi",
    href: "",
    img: './Exchanges/huobi-icon.svg'
  },
];

const wallets_items: any[] = [
  {
    label: "Keeper",
    href: "",
    img: './Wallets/cryptocom-icon-2x.png'
  },
  {
    label: "Trust Wallet",
    href: "",
    img: './Wallets/trust-wallet-icon-2x.png'
  },
  {
    label: "Ledger",
    href: "",
    img: './Wallets/guarda-icon-2x.png'
  },
  {
    label: "Guarda",
    href: "",
    img: './Wallets/keeper-icon.svg'
  },
  {
    label: "Crypto.com",
    href: "",
    img: './Wallets/ledger-icon.svg'
  },
  {
    label: "Wirex",
    href: "",
    img: './Wallets/wirex-icon-2x.png'
  },
  {
    label: "Enno Wallet",
    href: "",
    img: './Wallets/enno-icon.png'
  },
];