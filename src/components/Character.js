import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components';


//styles//
const kf = keyframes`
    100%{
        opacity: 1;
    }
`

const StyledDiv = styled.div`
    opacity: 0;
    animation: ${kf} 3.5s forwards;
    background-color: ${props => props.theme.offWhite};
    margin: ${props => props.theme.basicMargin};
    width: 40%;
    border: 2px solid ${props => props.theme.black};

    h1{
        font-size: 1.3rem;
        color: ${props => props.theme.black};
    }

    button{
        background-color: ${props => props.theme.offWhite};
        height: 40%;
        border: none;
        transition: all ease-in-out .5s;

        &:hover{
            background-color: ${props => props.theme.black};
            color: ${props => props.theme.offWhite};
            transition: all ease-in-out .5s;
            
        }

    }
    p{
        font-size: 1rem;
        padding: ${props => props.theme.basicPadding};
        font-weight: bold;
        border-top: 2px solid ${props => props.theme.black};
    }
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

// component starts here
const Character = props =>{
    const { player } = props //prop from app
    const [toggleDetails, SetToggleDetails] = useState(false) // state declared for Details function that toggles button

    const Details = () => {
        SetToggleDetails(!toggleDetails)
        console.log(toggleDetails)
    }

    return(
        <>
        <StyledDiv>
            <Flex>
                <h1>{player.name}</h1>
                <button onClick ={() => {Details()}}>Details</button>
            </Flex>
        {toggleDetails // when button is true, renders details, when false, renders null
        ? <p>Born: {player.birth_year}<br></br>Gender: {player.gender}<br></br>Height: {player.height}</p>
        : null }
        </StyledDiv>

        </>
    )
}

export default Character
