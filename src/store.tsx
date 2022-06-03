import React, { createContext, useContext, useReducer } from 'react'

interface Action {
  type: ActionKind;
  payload: any;
}

export interface AppContextInterface {
  loading: boolean,
  tab: string,
}

const initialState: AppContextInterface = {
  loading: false,
  tab: 'dashboard'
}

export enum ActionKind{
  setLoading,
  setTab,
}

const StoreContext = createContext<{ state: AppContextInterface; dispatch: React.Dispatch<any>; }>
({
  state: initialState,
  dispatch: () => null
});

export const reducer = (state: AppContextInterface,  action: Action ) => {
  switch (action.type) {
    case ActionKind.setLoading:
      return { ...state, loading: action.payload}
    case ActionKind.setTab:
      return { ...state, tab: action.payload}
    default:
      return state
  }
}

export const StoreProvider: React.FC = ({ children}) => 
{
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)