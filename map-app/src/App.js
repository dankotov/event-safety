import React, { useState, useEffect } from 'react';
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

const App = () => {

  const [pointsArray, setPointsArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const points = await servicePoints.getAll();
      setPointsArray(points);
      setLoading(false);
    }
    fetchData();

  }, [])
  console.log('Points from db', pointsArray);

  if(loading){
    return(
      <p>loading...</p>
    )
  }

  return (
    <>
    <OuterWrapper>
      <AppWrapper>
        <Container>
          <Map points={pointsArray} />
        </Container>
      </AppWrapper>
    </OuterWrapper>
    </>
  );
}

export default App;

