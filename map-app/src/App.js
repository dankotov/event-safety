import React, { useState } from 'react';
import styled from 'styled-components';
import Map from './Map';
import servicePoints from "./services/points";


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
  padding-top: 40px;
  padding-bottom: 40px;
`;

export default class App extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      checked: false,
      points: [],
    }
  }

  componentDidMount() {
    const fetchData = async () => {
      const pointsFetched = await servicePoints.getAll();
      // this.setState({points: pointsFetched})
      return pointsFetched;

      
      console.log(this.state.points);
    }
    this.setState({points: fetchData()});
    // fetchData();
    console.log(this.state.points)
  }

  render() { 
    return (
      <OuterWrapper>
        <AppWrapper>
          <Container>
            <Map points={this.state.points} />
          </Container>
        </AppWrapper>
      </OuterWrapper>
    );
  }
}

