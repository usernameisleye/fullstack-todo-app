import { useState } from "react";

const Options = ({openOptions, deleteTodo, todo}) => {
    //Setting default input value to 'todo.description' firstly 
    const [description, setDescription] = useState(todo.description);

    //Editting todo using the http PUT method
    const editTodo = async() => {
        try{
            const body = {description};
            const res = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/";
        }catch(err){
            console.error(err.message);
        }
    }

    return ( 
        <div className="options">
            <img src="./images/ellipsis-solid.svg" alt="" onClick={openOptions}/>

        <ul className="todo-options">
            <li><img src="./images/pen-to-square-solid.svg" alt="Edit Icon"
            onClick={editTodo}/> Edit</li>
            <li><img src="./images/trash-solid.svg" alt="Delete Icon"
            onClick={deleteTodo}/> Delete</li>
        </ul>
        </div>
     );
}
 
export default Options;