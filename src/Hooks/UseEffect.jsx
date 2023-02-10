import React from 'react'
import { useState, useEffect } from "react";


const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('');

    useEffect(() => {
        clearInterval();
    }, [color])

    const IncreaseHandler = () =>{
        setCount(count + 1);
    }

    const ColorHandler = () =>{
        setColor('red');
    }

    setInterval(() => {
        console.log('P413');
    }, 1000)

  return (
    <div>
        <p>Fetching data, Directly updating the DOM and Timers</p>
        <button onClick={IncreaseHandler}>INCREASE</button>
        <button onClick={ColorHandler}>ASSIGN THE COLOR</button>
    </div>
  )
}

export default UseEffect