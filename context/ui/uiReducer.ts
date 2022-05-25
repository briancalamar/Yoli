import { uiState } from './';

type uiActionType =
  | { type: 'OPEN_SIDEBAR' }
  | { type: 'CLOSE_SIDEBAR' }


export const uiReducer = (state: uiState, action: uiActionType): uiState => {

  switch (action.type) {

  case 'OPEN_SIDEBAR':
    return { ...state, sideMenuOpen: true };

  case 'CLOSE_SIDEBAR':
    return { ...state, sideMenuOpen: false };

  default:
    return state;

  }
};