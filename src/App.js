import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';




const App = () => {

  const [player, SetPlayer] = useState([])

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
      <h1 className="Header">Characters</h1>
      <div>
        {
          player.map(pl =>{
            return <Character key={pl.id} player={pl} />
          })

        }
      </div>
    </div>
  );
}

export default App;
