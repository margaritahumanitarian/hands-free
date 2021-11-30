import styled from 'styled-components';

export const NavBar = styled.div`
  grid-area: nav;
  display: flex;
  justify-content: center;
`;

export const ActionButton = styled.input`
  font-size: 18px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 3px;
  background-color: coral;
  color: azure;
  white-space: nowrap;
  width: 200px;
  margin: 20px 0;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
`;
