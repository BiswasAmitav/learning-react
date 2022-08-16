import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //FIRST STATE OR THIS STATE TO CATCH TO INPUT FIELD'S VALUE WHICH USER WILL WRITE IN THAT FIELD....
  const [studentName, sentStudentName] = useState("");
  //console.log(studentName); //FOR CHECKING THAT OUR CODE FOR GETTING USER'S VALUE IS WORKING FINE OR NOT ...

  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);


  const createStudentHandler=()=>{
    if(studentName){
      const newStudent={
        id:Date.now(),
        name:studentName
      }

      setStudents([...students, newStudent]);
      
    }else{
      alert("Please enter a valid number...!");
    }
  }

  const editStudentHandler=(id)=>{
    const toBeEditStudent= students.find(item=>item.id==id);
    setEditMode(true);
    setEditableStudent(toBeEditStudent);
  }

  const deleteStudentHandler= (id)=>{
    setStudents(students.filter(item=>item.id!==id));
  }

  const updateStudentHandler=(id)=>{
    setStudents(students.map((student)=>{
      if(student.id==editableStudent.id){
        student.name=studentName;
      }
    }))
  }

  const presentHandler=()=>{

  }

  const toggle=()=>{

  }

  return (
    <div className="App">
      <form>
        <input
          type="text"
          value={studentName}
          onChange={(event) => sentStudentName(event.target.value)}
          placeholder="Enter a valid name"
        ></input>

        <button>Add Student</button>
      </form>


      <div className="Students-section">

        <div className="all-students">
          <ul>
            {students.map(student=>(
              <li>
                <span>{student.name}</span>
                <button>Edit</button>
                <button>Delete</button>
                <button>Present</button>
                <button>absent</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="present-students">
          {students.filter(item => item.isPresent==true)
            .map(student=>(
              <li>
                <span>{student.name}</span>
              </li>
            ))
          }
        </div>

        <div className="absent-students">
        {students.filter(item => item.isPresent==false)
            .map(student=>(
              <li>
                <span>{student.name}</span>
              </li>
            ))
          }
        </div>

      </div>
    </div>
  );
}

export default App;
