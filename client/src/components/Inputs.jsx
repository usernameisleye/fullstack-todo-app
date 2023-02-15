const Inputs = ({createTodo}) => {
    return ( 
        <div className="inputs">
            <input type="text" placeholder="Type in Todo..."/>
            <button onClick={createTodo}>Add Todo</button>
        </div>
     );
}
 
export default Inputs;