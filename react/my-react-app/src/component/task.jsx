import React, { useState } from "react";

function Task() {
  const [input, setInput] = useState({
    name: '',
    password: '',
    email: ''
  });
  function store (){
    
  }

  return (
    <>
      <label htmlFor="name">Name</label>
      <input 
        type="text" 
        name="name" 
        onChange={(e) => setInput({input: e.target.value})} 
      />

      <label htmlFor="password">Password</label>
      <input 
        type="password" 
        name="password" 
        onChange={(e) => setInput({input:e.target.value})} 
      />

      <label htmlFor="email">Email</label>
      <input 
        type="email" 
        name="email" 
        onChange={(e) => setInput({input,email :e.target.value})} 
      />

      <button onClick={() => alert(`Name: ${input.name}, Password: ${input.password}, Email: ${input.email}`)}>
        Submit
      </button>
    </>
  );
}

export default Task;
