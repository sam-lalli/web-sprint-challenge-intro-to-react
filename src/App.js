import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
  100%{
    transform: scale(1);
  }
`

const StyledHeader = styled.h1`
  transform: scale(3);
  animation: ${kf} 2.5s forwards;
  text-decoration-line: underline;
`

const FlexBox = styled.div`
display: flex;
/* flex-wrap: wrap; */
flex-direction:column;
`




const App = () => {

  const [player, SetPlayer] = useState([]) //declare state

// fetching data from api
  useEffect(() => {

    axios.get("http://swapi.dev/api/people")
      .then(res => {
        SetPlayer(res.data.results)
        //console.log(res.data.results)   
      })
      .catch(err => {console.log("Failed to Fetch")})
  },[])
  return (
    <div className="App">
      <StyledHeader className="Header"> Top 10 Greatest Star Wars Characters Of All Time</StyledHeader>
      <FlexBox>
        {
          player.map(pl =>{
            return <Character key={pl.id} player={pl} /> // returning a Character component for each character in the array, passing props
          })

        }
      </FlexBox>
    </div>
  );
}

export default App;
