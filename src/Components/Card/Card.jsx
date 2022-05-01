import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Divider from "../../assets/images/pattern-divider-desktop.svg"
import DiceImg from "../../assets/images/icon-dice.svg"



const CardContainer = styled.div`
  background-color: hsl(217, 19%, 24%);
  border-radius: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 45rem;
  height: 25rem;
`


const Advice = styled.span`
    color:  hsl(150, 100%, 66%);
    letter-spacing: 0.2rem;
`
const Text = styled.p`
    color: hsl(193, 38%, 86%);
`

const Img = styled.img`
    width: 40rem;
`
const DiceWrapper = styled.div`
    width: 60px;
    height: 60px;
    background-color:hsl(150, 100%, 66%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    position: absolute;
    margin-right: 0px;
    margin-top: 400px;
    &:hover{
        transform: scale(1.04);
        cursor: pointer;
    }
`

const Dice = styled.img`
`






const Card = ({ text, fetchAdvice}) => {


    return (
        <>
            <CardContainer>
                <Advice>Advice #{text.slip.id} </Advice>
                <Text>"{text.slip.advice}"</Text>
                <Img src={Divider} />
            </CardContainer>
            <DiceWrapper onClick={fetchAdvice}>
                <Dice src={DiceImg} />
            </DiceWrapper>
        </>
    );
}

export default Card


    // useEffect(() => {
    //     axios.get("https://api.adviceslip.com/advice").then(
    //         (response) => { setAdviced(response.data) }
    //     ).catch(error => console.log('erro'))
    // }, [])