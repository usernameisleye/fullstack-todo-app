const Inputs = ({createTodo, getValue, value}) => {
    return ( 
        <div className="inputs">
            <input type="text" placeholder="Type in Todo..." onChange={getValue} value={value}/>
            <button onClick={createTodo}>Add Todo</button>
        </div>
     );
}
 
export default Inputs;