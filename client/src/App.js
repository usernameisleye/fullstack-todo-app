import Inputs from "./components/Inputs";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      {/* Nested components here */}
      <div className="main">
        <Inputs />
        <Todo />
      </div>
    </div>
  );
}

export default App;
