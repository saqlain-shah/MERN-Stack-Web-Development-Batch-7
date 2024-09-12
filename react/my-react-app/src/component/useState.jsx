import React, { useState } from 'react'

export default function UseState() {
    const [count,setCount]=useState(1);

    function counter(){
        setCount(count+1);

    }

  return (
    <div>

{count}



        <button onClick={counter}>count me</button>
    </div>
  )
}
