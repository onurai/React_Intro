import React from 'react'
import { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("");

    const IncreaseHandler = () => {
        setCount(count+1)
    }
    const DecreaseHandler = () => {
        setCount(count-1)
    }
    // const ChangeHandler = (e) => {
    //     setValue(e.target.value)
    // }
    const OptionHandler = (a) => {
        setValue(a.target.value)
    }
    
  return (
    <div>
        <span>{count}</span>
        <button onClick={IncreaseHandler}>+</button>
        <button onClick={DecreaseHandler}>-</button>
        {/* <input type='text' onChange={ChangeHandler} />
        <p>{value}</p> */}
        
        <select onChange={OptionHandler}>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JS">JS</option>
        </select>

        <h3>Selected Language: {value}</h3>
    </div>
  )
}

export default UseState