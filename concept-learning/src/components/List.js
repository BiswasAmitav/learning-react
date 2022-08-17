import React from "react";
import { v4 as uuidv4 } from 'uuid'; //here is the fle to generate unique id, before that we need to install it inside the directory...

const todos = [{
        id:uuidv4(),
        title: "todo 1",
        desc: "todo 1 description 1",
    },
    {
        title: "todo 2",
        desc: "todo 2 description 2 ",
    },
    {
        title: "todo 3",
        desc: "todo 3 description 3",
    },
];

const List = () =>{
    //console.log(uuidv4());
    return(
        <div>
            {todos.map((todo) =>{
                 //HERE I DESTRUCTING THE array element ...
                const{id,title,desc}=todos;
                return(
                    // <div key={todo.id}>
                    //     <h3>{todo.title}</h3>
                    //     <p>{todo.desc}</p>
                    // </div>
                    //AFTER DESTRUCTION WE CAN USE IN THIS WAY....
                    <div key={id}>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default List;