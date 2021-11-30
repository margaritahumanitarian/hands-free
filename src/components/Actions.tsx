import { Dispatch } from 'react';
import { ActionOption } from '../utils/types';
import { ActionList, ListItem, ActionItem } from './ActionsUI';

interface ActionProps {
  appState: ActionOption;
  dispatch: Dispatch<[string, ActionOption]>;
}

const Actions = ({ appState, dispatch }: ActionProps) => {
  const handleClick = (actionOption: ActionOption) => {
    dispatch([actionOption.type, actionOption]);
  };

  return (
    <>
      <ActionList>
        {appState.actions?.map((actionOption, i) => {
          return (
            <ListItem key={actionOption.type}>
              <ActionItem
                type="button"
                name="button"
                aria-label="button"
                onClick={() => handleClick(actionOption)}
                border={actionOption.actionType}
                value={`${i + 1}.) ${actionOption.title}`}
              />
            </ListItem>
          );
        })}
      </ActionList>
    </>
  );
};

export default Actions;
