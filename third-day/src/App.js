import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(100);

  const increase = (data) => {
    // let temp=counter+1;//here we can not reassign the value...
    setCounter(counter + data);
  };

  const decrease = (data) => {
    setCounter(counter - data);
  };

  //THIS IS THE LOGIC FOR INCREMENT OR DECREMENT ..........
  // let counter=0;
  // const increase=()=>{
  //   counter++;
  //   console.log(counter);
  // }

  // const decrease=()=>{
  //   counter--;
  //   console.log(counter);
  // }

  return (
    <div className="App">
      <h1> The value of the counter is: {counter} </h1> <hr />
      {/* ITS A SIMPL FUNCTION FOR ONE TYPE BUTTON... */}
      {/* <button onClick={increase}>
             Increase By 100
           </button>



           <button onClick={decrease}>
             Decrease By ONe 
           </button>  */}
      <button onClick={() => increase(1)}>
        Increase By One 
      </button>

      <button onClick={() => increase(5)}>
        Increase By 5 
      </button>


      <button onClick={() => increase(100)}>
        Increase By 100 
      </button>


      <button onClick={() => decrease(1)}>
        Decrease By ONe
      </button>


      <button onClick={() => decrease(5)}>
        Decrease By 5 
      </button>


      <button onClick={() => decrease(100)}>
        Decrease By 100 
      </button>{" "}


    </div>
  );
}

export default App;
