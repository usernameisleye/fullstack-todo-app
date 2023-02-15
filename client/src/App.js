import { useState } from "react";
import Inputs from "./components/Inputs";
import Todo from "./components/Todo";

function App() {
  function createTodo(){
  }

  return (
    <div className="App">
      <div className="main">
        <Inputs createTodo={createTodo}/>
        <Todo />
      </div>
    </div>
  );
}

export default App;
