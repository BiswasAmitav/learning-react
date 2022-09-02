import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const products =[
    {name:'Photoshop',price:'200 usd', company:'cannon'},
    {name:'Illustrator', price:'150 usd'},
    {name:'adobe',price:'100 usd'}
  ];



  const productNames=products.map(produc => produc.name);
  console.log(productNames);
  return (
    <div className="App">
      <p> I am Nayok form react...</p>
      <Counter></Counter>

      <Product name={products[0].name} price={products[0].price}></Product>
      <Nayok></Nayok>
      {/* <Product>{products[0]}</Product> */}
    </div>
  );
}

function Product(props){
  const proudctStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'300px',
    float:'left',
    boxSizing:'border-box'
  }

  // const {name,price}=props.Product;
  // console.log(name,price);
  // console.log(props);

  return(
    <div style={proudctStyle}>
      <h3>Name: {props.name}</h3>
      <h2>Price: {props.price}</h2>
      <button>Buy Now </button>
    </div>
  )
}

function Nayok(){
  const nayoks=['Manna','Dildar','Jashim','Alamgir','Salmanshah'];

  const nayok = nayoks.map(nayok => nayok);

  // console.log(nayok);
  return(
    <div>
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        <li>{nayok[0]}</li>
        <li>{nayok[2]}</li>
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount]=useState(0);
  const handleAdd=()=>console.log('clicked')
  return(
  <div>
    <h1>Count : {count} </h1>
    <button onClick={handleAdd}> Add </button>
  </div>
  )
}

export default App;
