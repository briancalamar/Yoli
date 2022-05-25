import { createContext } from 'react';

interface ContextProps {
 sideMenuOpen: boolean;
 openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const uiContext = createContext({} as ContextProps);