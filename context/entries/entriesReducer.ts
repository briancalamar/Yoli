import { EntriesState } from './';

type EntriesActionType =
  | { type: 'UI-OPEN-SIDEBAR' }
  | { type: 'UI-CLOSE-SIDEBAR' }

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {

  switch (action.type) {
  // case 'UI-OPEN-SIDEBAR':
  //   return { ...state, sideMenuOpen: true };
  // case 'UI-CLOSE-SIDEBAR':
  //   return { ...state, sideMenuOpen: false };
  default:
    return state;
  }
};