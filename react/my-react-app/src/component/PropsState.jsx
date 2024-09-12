// props is the short form of properties ,it is just a single object that is mainly used when we want to transfer the date of parent to child
// props is not a keyword 



import React from "react"


function PropsState(props){
    let {student,result}=props;  // array destructing
    console.log(student);

    return(
        <>
        <h1>I am {student.name} </h1>
        <h1>you'r {result}  </h1>

        </>

    )
}
export  {PropsState};