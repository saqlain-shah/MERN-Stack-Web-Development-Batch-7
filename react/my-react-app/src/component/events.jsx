import React from 'react'

export default function Events() {
function desplayData(){
alert("i am funtion without paramater")}

function addData(a,b){
    alert(a+b);
}

  return (
    <>
    <button onClick={desplayData}>click me</button>
    <button onClick={()=>addData(4,5)}>Add me</button>

    </>
    
  )
}
