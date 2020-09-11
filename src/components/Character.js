import React, { useState } from 'react'


const Character = props =>{
    const { player } = props
    const [toggleDetails, SetToggleDetails] = useState(false)

    const Details = () => {
        SetToggleDetails(!toggleDetails)
        console.log(toggleDetails)
    }

    return(
        <>
        <div>
        <h1>{player.name}</h1>
        <button onClick ={() => {Details()}}>Details</button>
        {toggleDetails
        ? <p>Born: {player.birth_year}<br></br>Gender: {player.gender}<br></br>Height: {player.height}</p>
        : null }
        </div>

        </>
    )
}

export default Character
