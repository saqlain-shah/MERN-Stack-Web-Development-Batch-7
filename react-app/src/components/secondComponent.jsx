import React, { useState } from "react";

export default function SecondComponent() {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState )=> ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

  const handleSubmit = () => {
    const { name, email, password } = formData;
    alert(`Name: ${name}  
    Email: ${email}
    Password: ${password}`);
  };

  return (
    <React.Fragment>

      <h1>Second Compon</h1>
      <label>Name</label>
      <input
        name="name"
        value={formData.name}
        type="text"
        onChange={(e)=>{setFormData({...formData,name:e.target.value})}}
      />
      <label>Email</label>
      <input
        name="email"
        value={formData.email}
        type="email"
        onChange={(e)=>{setFormData({...formData, email:e.target.value})}}
      />
      <label>Password</label>
      <input
        name="password"
        value={formData.password}
        type="password"
        onChange={(e)=>{setFormData({...formData, password:e.target.value})}}
      />

      <button onClick={handleSubmit}>Submit</button>
    </React.Fragment>
  );
}
