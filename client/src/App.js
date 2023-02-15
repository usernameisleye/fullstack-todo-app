import { useState } from "react";
import Inputs from "./components/Inputs";
import Todo from "./components/Todo";

function App() {
  function createTodo(){
    // console.log('hi');
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

  return (
    <div className="App">
      <div className="main">
        <Inputs createTodo={createTodo}/>
        <Todo openOptions={openOptions}/>
      </div>
    </div>
  );
}

export default App;
