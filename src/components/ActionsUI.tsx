import styled from 'styled-components';
import { ACTIONTYPE } from 'utils/constants';

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
`;

interface ActionItemProps {
  border: string;
}

export const ActionItem = styled.input<ActionItemProps>`
  display: flex;
  color: #555;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  background-color: whitesmoke;
  border: 5px solid
    ${(props: ActionItemProps) => {
      switch (props.border) {
        case ACTIONTYPE.state:
          return 'indianRed';
        case ACTIONTYPE.action:
          return 'mediumAquaMarine';
        case ACTIONTYPE.action_and_state:
          return 'salmon';
        case ACTIONTYPE.native_control:
          return 'MediumSeaGreen';
        default:
          return 'red';
      }
    }};
  border-radius: 3px;
  margin: 10px;
  /* border-bottom: 1px solid #ddd; */
`;

export const ActionList = styled.ul`
border: 1px solid #ddd;
margin: 5px;
padding: 0;
`;