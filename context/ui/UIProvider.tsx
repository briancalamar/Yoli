import { FC, useReducer } from 'react';
import { uiContext, uiReducer } from '.';

export interface uiState {
  sideMenuOpen: boolean;
}

const initialState: uiState = {
  sideMenuOpen: false,
};

export const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const openSideMenu = () => {
    dispatch({ type: 'OPEN_SIDEBAR' });
  };

  const closeSideMenu = () => {
    dispatch({ type: 'CLOSE_SIDEBAR' });
  };

  return (
    <uiContext.Provider value={{
      ...state,
      openSideMenu,
      closeSideMenu,
    }}>
      {children}
    </uiContext.Provider>
  );
};