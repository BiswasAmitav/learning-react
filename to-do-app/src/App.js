import logo from './logo.svg';
import './App.css';
  import {useState} from 'react';







function App() {

  const [todoTitle, setTodoTitle]=useState("")//FOR GETTING THE VALUE FORM USERS.....
  // console.log(todoTitle);


  //TO ADDING USERS VALUE FOR CREATING LIST AFTER CLICKING ADD TO DO....
  const [todoList,setTodoList]=useState([]);


  const createTodoHandler =()=>{
    if(todoTitle!==''){
     const newTodo={
       id:Date.now(),
       title:todoTitle,
      isComplete:false
     };

     setTodoList([...todoList,newTodo]);
     setTodoTitle("");

    }

    else{
       //USER CAN BE CLICKED ADD TO WITH EMPTY TITLE...
      alert("Please Enter a valid title..!");
    }
  }


  return (
    <div className="App">
      <div className="todo-app">
        <input type="text" value = {todoTitle} onChange={(event)=> setTodoTitle(event.target.value)}></input>
        <button onClick={createTodoHandler}>
          Add todo
        </button>
        <ul className="todo-list">
          {todoList.map(todo =>(
            <li>
              <span>{todo.title}</span>
              <button>
                Edit
              </button>
              <button>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
