import computerActions from '../data/computerActions';
import discordActions from '../data/discordActions';
import mainActions from '../data/mainActions';
import { ACTIONTYPE, APPSTATE } from '../utils/constants';
import { ActionOption } from '../utils/types';

const appStateReducer = (
  appState: ActionOption,
  [type, payload]: [string, ActionOption]
): ActionOption => {
  /**
   * OFF STATE
   */
  if (
    appState.state === APPSTATE.off &&
    payload.actionType === ACTIONTYPE.native_control
  ) {
    switch (type) {
      case 'OPEN':
        return {
          ...appState,
          state: APPSTATE.main,
          title: 'Actions',
          actions: [...mainActions],
        };
      default:
        break;
    }
  }

  /**
   * MAIN STATE
   */
  if (appState.state === APPSTATE.main) {
    switch (type) {
      case 'DISCORD_ACTIONS':
        return {
          ...appState,
          state: APPSTATE.discord,
          title: payload.title,
          actions: [...discordActions],
        };
      case 'COMPUTER_ACTIONS':
        return {
          ...appState,
          state: APPSTATE.computer,
          title: payload.title,
          actions: [...computerActions],
        };
      default:
        break;
    }
  }

  /**
   * DISCORD ACTIONS STATE
   */
  if (appState.state === APPSTATE.discord) {
    switch (type) {
      case 'OPEN_DISCORD':
        return { ...appState, script: 'open discord script' };
      case 'NEXT_SERVER':
        return { ...appState, script: 'next discrod server script' };
      case 'PREVIOUS_SERVER':
        return { ...appState, script: 'previous discord server script' };
      case 'CLOSE_DISCORD':
        return { ...appState, script: 'close discord script' };
      default:
        break;
    }
  }

  /**
   * COMPUTER ACTIONS STATE
   */
  if (appState.state === APPSTATE.computer) {
    switch (type) {
      case 'OPEN_APP':
        return { ...appState, script: payload.script };
      default:
        break;
    }
  }

  /**
   * BASIC ACTIONS NOT STATE BASED (except for off state)
   */
  if (
    appState.state !== APPSTATE.off &&
    payload.actionType === ACTIONTYPE.native_control
  ) {
    switch (type) {
      case 'BACK_TO_ACTIONS':
        return {
          ...appState,
          title: 'Actions',
          actions: [...mainActions],
          state: APPSTATE.main,
        };
      case 'CLOSE':
        return {
          ...appState,
          state: APPSTATE.off,
          title: 'Open',
          actions: [],
        };
      default:
        break;
    }
  }
  return appState;
};

export default appStateReducer;
