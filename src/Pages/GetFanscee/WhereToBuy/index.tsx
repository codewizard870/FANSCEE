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
    href: "https://waves.exchange/",
    img: './Fanscee-02.png'
  }
];

const centralized_items: any[] = [
  {
    label: "Binance",
    href: "https://www.binance.com/en/trade/WAVES_USDT",
    img: './Exchanges/binance-icon.svg'
  },
  {
    label: "Okex",
    href: "https://www.okx.com/",
    img: './Exchanges/okex-icon.svg'
  },
  {
    label: "Bithumb",
    href: "https://m.bithumb.com/trade/order/WAVES_KRW",
    img: './Exchanges/bithumb-icon.svg'
  },
  {
    label: "Kraken",
    href: "https://trade.kraken.com/ru-ru/charts/KRAKEN:WAVES-USD",
    img: './Exchanges/kraken-icon.svg'
  },
  {
    label: "Huobi",
    href: "https://www.huobi.com/ru-ru/exchange/waves_usdt/",
    img: './Exchanges/huobi-icon.svg'
  },
];

const wallets_items: any[] = [
  {
    label: "Keeper",
    href: "https://keeper-wallet.app/",
    img: './Wallets/cryptocom-icon-2x.png'
  },
  {
    label: "Trust Wallet",
    href: "https://trustwallet.com/ru/waves-wallet/",
    img: './Wallets/trust-wallet-icon-2x.png'
  },
  {
    label: "Ledger",
    href: "https://www.ledger.com/waves-wallet",
    img: './Wallets/guarda-icon-2x.png'
  },
  {
    label: "Guarda",
    href: "https://guarda.com/coins/waves-wallet/",
    img: './Wallets/keeper-icon.svg'
  },
  {
    label: "Crypto.com",
    href: "https://crypto.com/defi-wallet",
    img: './Wallets/ledger-icon.svg'
  },
  {
    label: "Wirex",
    href: "https://wirexapp.com/global",
    img: './Wallets/wirex-icon-2x.png'
  },
  {
    label: "Enno Wallet",
    href: "https://enno.link/KwM5b",
    img: './Wallets/enno-icon.png'
  },
];