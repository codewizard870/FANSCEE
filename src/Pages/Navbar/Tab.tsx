import React, { FunctionComponent } from 'react';
import { useNavigate } from "react-router-dom";
import { Flex, Text, Link } from '@chakra-ui/react'
import {useStore, ActionKind} from '../../store';

interface Props {
  id: string,
}
const Tab: FunctionComponent<Props> = ({id, children}) => {
  const {state, dispatch} = useStore();
  const selected = id == state.tab;
  const navigate = useNavigate();

  const clickTab = () => {
    dispatch({type: ActionKind.setTab, payload: id});

    if(id=='bridge')
      window.open('https://rainbowbridge.app/transfer', '_blank')?.focus();
    else
      navigate("/" + id);
  }
  return (
    <Flex
      fontSize={'13px'}
      textStyle='secondary'
      height={'28px'}
      justify={'center'}
      align={'center'}
      cursor={'pointer'}
      px={'18px'}
      onClick={() => {clickTab()}}
      letterSpacing='3.2px'

    >
      <Link 
        backgroundImage='linear-gradient(to right, rgb(0, 75, 224), rgb(0, 75, 224))'
        backgroundPosition='50% 99%'
        backgroundRepeat='no-repeat'
        backgroundSize='0% 1px'
        color='#000'
        transition='background-size .3s cubic-bezier(.465,.183,.153,.946)'
        _hover={{backgroundSize:'100% 1px', color:'rgb(0, 75, 224)'}}
      >
        {children}
      </Link>
    </Flex>
  );
}

export default Tab;