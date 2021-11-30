import { APPSTATE, ACTIONTYPE } from '../utils/constants';
import { ActionOption } from '../utils/types';

const computerActions: ActionOption[] = [
  {
    type: 'OPEN_APP',
    title: 'Open App',
    actionType: ACTIONTYPE.action_and_state,
  },
  {
    type: 'OPEN_CHROME',
    title: 'Open Chrome',
    actionType: ACTIONTYPE.action_and_state,
    state: APPSTATE.browser,
  },
  {
    type: 'OPEN_NOTES',
    title: 'Open Notes',
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

export default computerActions;
