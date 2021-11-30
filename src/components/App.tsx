import { useReducer, useEffect } from 'react';
import { ACTIONTYPE, APPSTATE } from '../utils/constants';
import { ActionOption } from '../utils/types';
import AppNav from './Nav';
import Actions from './Actions';
import '../baseStyles/BaseAppCSS.css';
import appStateReducer from '../reducers/appStateReducer';
import { AppFrame, AppLayout, AppMainSection } from './AppUI';

const initState: ActionOption = {
  type: 'OPEN',
  title: 'Open',
  actionType: ACTIONTYPE.state,
  state: APPSTATE.off,
};

export default function App() {
  const [appState, dispatch] = useReducer(appStateReducer, initState);

  // logs current APP STATE
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('App State', appState);
  }, [appState]);

  // opens only if APP is in OFF state
  const handleOpenApp = () => {
    if (appState.state === APPSTATE.off) {
      dispatch([
        'OPEN',
        {
          type: 'actions',
          title: 'Actions',
          actionType: ACTIONTYPE.native_control,
        },
      ]);
    }
  };

  return (
    <AppFrame>
      <AppLayout>
        <AppNav buttonName={appState.title} appStateChange={handleOpenApp} />
        {appState.state !== APPSTATE.off && (
          <AppMainSection>
            <Actions dispatch={dispatch} appState={appState} />
          </AppMainSection>
        )}
      </AppLayout>
    </AppFrame>
  );
}
