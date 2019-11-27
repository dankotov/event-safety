import React from 'react';
import styled from 'styled-components';
import Map from './Map';

const OuterWrapper = styled.div`
  display: table; 
  position: absolute;
  height: 80%;
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

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    }

  }

  render() {
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

}
