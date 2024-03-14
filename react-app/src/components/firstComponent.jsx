import React, { useState } from "react";

export default function FirstComponent() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassowrd] = useState();
  return (
    <React.Fragment>
      <label>Name</label>
      <input
      value={name}
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
            <label>Email</label>
      <input
      value={email}
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
            <label>Password</label>
      <input
      value={password}
        type="password"
        onChange={(e) => {
          setPassowrd(e.target.value);
        }}
      />

      <button
        onClick={() => {
          alert(`Name : ${name}  
          Email: ${email}
          Password : ${password}
          `);
        }}
      >Submit</button>
    </React.Fragment>
  );
}
