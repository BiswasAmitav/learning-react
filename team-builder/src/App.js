import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {useEffect} from 'react';
import User  from './components/User/User';

function App() {
  const [users,setUsers]=useState([]);
  console.log(users);
  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=2')
    .then((res) => res.json())
    .then((data) => setUsers(data.results))
  },[])
  return (
    <div>
      <h1>Team Builder</h1>
        {
          users.map(user => <User user={user}></User>)
        }
    </div>
  )
}

export default App;
