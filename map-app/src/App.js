import React, { useState } from 'react';
import styled from 'styled-components';
import Map from './Map';

const OuterWrapper = styled.div`
  display: table; 
  position: absolute;
  height: 85%;
  width: 100%;
`;

const AppWrapper = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: auto auto;
`;

const App = () => {

  return (
    <OuterWrapper>
      <AppWrapper>
        <Container>
          <Map />
        </Container>
      </AppWrapper>
    </OuterWrapper>
  );
}

export default App;
