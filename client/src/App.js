import { useState } from "react";
import Inputs from "./components/Inputs";
import Todo from "./components/Todo";
import Options from "./components/Options";

function App() {
  const [value, setValue] = useState('');
  let [todos, setTodos] = useState('');

  function getValue(e){
    setValue(e.target.value);
  }

  function addTodo(e){
    setTodos(e.innerHTML)
  }

  function openOptions(e) {
    let path = e.target.parentElement.lastElementChild;
    path.classList.add("show");

    document.addEventListener('click', e =>{
      if(e.target.tagName !== 'IMG'){
        path.classList.remove("show");
      }        
  })
  }
  
  function createTodo(){
    let todo = '';
    todo += `<div className="todo">
              <span>${value}</span>
            </div>`;
    document.querySelector('.todo-list').innerHTML += todo;
  }

  return (
    <div className="App">
      <div className="main">
        <Inputs createTodo={createTodo} getValue={getValue} value={value}/>
        <Todo openOptions={openOptions} addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;
