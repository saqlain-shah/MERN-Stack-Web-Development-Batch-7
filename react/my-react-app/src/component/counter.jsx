import { useState } from 'react'
import React from 'react';

function Counter() {

const [count,setCount]=useState(0);

  function incValue(){
    setCount(count+1);

  }

  return (
    <>
       <h1>{count}</h1>
       <button onClick={incValue}>Click me</button>
   
    </>
  )
}

export default Counter;
