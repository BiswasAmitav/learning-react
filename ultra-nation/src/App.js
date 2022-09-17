import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [countries,setCountries]=useState([]);
  //CONCEPT OF DESTRUCTION
  // const [x,y]=['abc','def'];
  // const total = add(2,3);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>{
      setCountries(data);
      console.log(data);
      // const names=data.map(country => country.name);
      // console.log(names);
    })
    .catch(error =>console.log(error))
  },[])

  return (
    <div className="App">
      <h1>{countries.length} Country is loaded . </h1>
      <h2>Data is retriving from Json api</h2>
      <ol>
        {
          countries.map(country => <li>Hello </li>)
        }
      </ol>
    </div>
  );
}



export default App;
