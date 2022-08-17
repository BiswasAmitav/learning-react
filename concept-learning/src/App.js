import React from "react";
import { useTransition } from "react";
import List from "./components/List";

const users=[
  {
    fullName:"Amitav Biswas",
    age:32,
    phones:[
      {home:"01771598384"},
      {office:"984289280"}
    ],
  },
  {
    fullName:"Md Sohag Sheikh",
    age:22,
    phones:[
      {home:"01771598384"},
      {office:"984289280"}
    ],
  }

]

function App() {
  return(
  <>
    {/* this is for componests practice how to create components and generating unique id 
    <List /> 
    */}

    <h1>Nested Loop...</h1>
    {
      users.map((user,index)=>(
        <article key={index}>
          <h3>Fullname : {user.fullName}</h3>
          <p> Age : {user.age}</p>
          {
            user.phones.map((phone,index)=><div key={index}>
             
              <p> <strong><span>Phone:- </span></strong> Home - {phone.home}</p>
              <p>Office - {phone.office}</p>
            </div>)
          }
          <hr></hr>
        </article>
      ))
    }

  </>
    
  ) 
}
export default App;
