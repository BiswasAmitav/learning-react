import logo from './logo.svg';
import './App.css';
import {useState} from 'react';



function App() {

  const [todoTitle, setTodoTitle]=useState("")//FOR GETTING THE VALUE FORM USERS.....
  // console.log(todoTitle);


  //TO ADDING USERS VALUE FOR CREATING LIST AFTER CLICKING ADD TO DO....
  const [todoList,setTodoList]=useState([]);

  //TO IDENTIFY THE MODE WETHER IT IS ON EDIT MODE OR ADDING MODE.....
  const [editMode, setEditMode]=useState(false);
  const [editableTodo,setEditableTodo]=useState(null);

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


  // FUNCTION FOR DELETE OPERATION ON APP......
  const deleteTodoHandler=(id)=>{
    const newTodoList=todoList.filter((item)=>item.id!==id);
    setTodoList(newTodoList);
  }


//FUNCTION FOR EDIT OPERATION ON APP.....
const editHandler=(id)=>{
  const todoTobeEdited=todoList.find((item)=>(item.id===id));
  setEditMode(true);
  setEditableTodo(todoTobeEdited);
  setTodoTitle(todoTobeEdited.title);
}

const updateTodoHandler=()=>{
  setTodoList(todoList.map((todo)=>{
    if(todo.id===editableTodo.id){
      todo.title=todoTitle;
      return todo;
    }
    return todo;
  }))
  setEditMode(false);
  setTodoTitle("");
  editableTodo(null);
}

  return (
    <div className="App">
      <div className="todo-app">
        <input type="text" value = {todoTitle} onChange={(event)=> setTodoTitle(event.target.value)}></input>
        <button onClick={() => {
          editMode? updateTodoHandler():createTodoHandler();
        }}>
          {editMode? "Update Todo":"Add Todo"}
        </button>
        <ul className="todo-list">
          {todoList.map(todo =>(
            <li>
              <span>{todo.title}</span>
              <button onClick={()=>editHandler(todo.id)}>
                Edit
              </button>
              <button onClick={()=>deleteTodoHandler(todo.id)}>
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
