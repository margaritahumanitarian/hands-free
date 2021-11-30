import { ACTIONTYPE, APPSTATE } from '../utils/constants';
import { ActionOption } from '../utils/types';

const Actions: ActionOption[] = [
  {
    type: 'OPEN_DISCORD',
    title: 'Open Discord',
    actionType: ACTIONTYPE.action,
  },
  {
    type: 'NEXT_SERVER',
    title: 'Next Server',
    actionType: ACTIONTYPE.action,
  },
  {
    type: 'PREVIOUS_SERVER',
    title: 'Previous Server',
    actionType: ACTIONTYPE.action,
  },
  {
    type: 'CLOSE_DISCORD',
    title: 'Close Discord',
    actionType: ACTIONTYPE.action,
  },
  {
    type: 'BACK_TO_ACTIONS',
    title: 'Back to Actions',
    actionType: ACTIONTYPE.native_control,
    state: APPSTATE.main,
  },
  {
    type: 'CLOSE',
    title: 'Close',
    actionType: ACTIONTYPE.native_control,
    state: APPSTATE.off,
  },
];

export default Actions;
