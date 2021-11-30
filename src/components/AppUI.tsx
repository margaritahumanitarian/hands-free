import styled from 'styled-components';

export const AppFrame = styled.div`
  background: #fff5;
  display: flex;
  justify-content: center;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1), inset 0 0 5px rgba(0, 0, 0, 0.3),
    inset 0 0 3px rgba(0, 0, 0, 0.4);
  width: 250px;
  max-height: 90vh;
  border-radius: 10px;
  padding: 20px;
`;

export const AppLayout = styled.div`
  max-height: 95vh;
  max-width: 400px;
  /* display: grid;
  grid-gap: 10px;
  grid-template-areas:
  'nav nav nav'
  'main main main'
  'footer footer footer';
  grid-template-rows: 0.2fr 9fr 1fr;
  grid-template-columns: 2fr 6fr 1fr; */
`;

export const AppMainSection = styled.main`
  min-height: 30%;
  max-height: 80%;
  overflow: scroll;
  grid-area: main;
  border: 3px solid;
  border-radius: 3px;
  width: 220px;
  background-color: aliceblue;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
`;
