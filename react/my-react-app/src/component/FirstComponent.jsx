import { useState } from 'react'
function FirstComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
     <label>Name</label>
     <input type="text" 
     onChange={(a)=>{
      setName(a.target.value);
     }}
     />

<label>Gmail</label>
     <input type="email" 
     onChange={(b)=>{
      setEmail(b.target.value);
     }}
     />

     <label> Password </label>
     <input type="pasword" 
     onChange={(c)=>{
      setPassword(c.target.value);
     }}
     />

     <button onClick={()=>{alert(`NAME: ${name} '<br>' Email: ${email} Passowrd:- ${password}`)}}>
      Click to show name</button>
    {/* //  <button onClick={()=>{alert(email)}}>Click to show email</button> */}

    {/* //  <button onClick={()=>{alert(password)}}>Click to show pasword</button> */}


   
    </>
  )
}

export default FirstComponent

//rfc
// functional component state less
