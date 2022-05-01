import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Card from "./Components/Card/Card";


const Title = styled.section`
  background-color: hsl(217, 19%, 38%);
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`


function App() {

  const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()
    setText(data)
    console.log(data);
  }   
  
  useEffect(() => {
    fetchAdvice()
  }, [])

  const firstAdvice = {
    slip: {
      id: 1,
      advice: 'keep calm MTF!'
    }
  }
  
  const [text, setText] = useState(firstAdvice);



  return (
    <Title>
      <Card text={text} fetchAdvice={fetchAdvice}>
      </Card>
    </Title>
  );
}

export default App;
