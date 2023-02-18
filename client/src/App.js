import { useState, useEffect } from "react";
import Inputs from "./components/Inputs";
import Todo from "./components/Todo";

function App() {
  const [todo, setTodo] = useState([]);
  
  //Getting all todos from db and storing them in 'todo' array
  const getTodo = async () => {
    try{
      const res = await fetch("http://localhost:5000/todos");
      const resData = await res.json();

      setTodo(resData);
      console.log(todo);
    }catch(err){
      console.error(err.message);
    }
  }

  //Running getTodo for every page load
  useEffect(() => {
    getTodo()
  }, []);

  //Deleting todo from db using the DELETE method, then deleting todo from array by filter method
  const deleteTodo = (id) => {
    try{
        fetch(`http://localhost:5000/todos/${id}`, {
            method: "DELETE"
        });

        setTodo(todo.filter(todo => todo.todo_id !== id))
    }catch(err){
        console.error(err.message);
    }
    console.log(todo.todo_id);
}

//Function for opening edit and delete UI
function openOptions(e) {
  let path = e.target.parentElement.lastElementChild;
  path.classList.add("show");

  document.addEventListener('click', e =>{
    if(e.target.tagName !== 'IMG'){
      path.classList.remove("show");
    }        
})
}

  return (
    <div className="App">
      <div className="main">
        <Inputs/>
        {
          todo.map(todo =>(
            <Todo openOptions={openOptions} todo={todo} deleteTodo={deleteTodo}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
