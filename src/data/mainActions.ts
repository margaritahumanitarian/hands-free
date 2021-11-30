import { APPSTATE, ACTIONTYPE } from '../utils/constants';
import { ActionOption } from '../utils/types';

const mainActions: ActionOption[] = [
  {
    type: 'DISCORD_ACTIONS',
    title: 'Discord Actions',
    actionType: ACTIONTYPE.state,
    state: APPSTATE.discord,
  },
  {
    type: 'COMPUTER_ACTIONS',
    title: 'Computer Actions',
    actionType: ACTIONTYPE.state,
    state: APPSTATE.computer,
  },
  {
    type: 'CLOSE',
    title: 'Close',
    actionType: ACTIONTYPE.native_control,
    state: APPSTATE.off,
  },
];

export default mainActions;
