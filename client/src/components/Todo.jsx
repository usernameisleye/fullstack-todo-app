import Options from './Options';

const Todo = ({openOptions, addTodo}) => {
    return (
        <div className="todo-list" onChange={addTodo}>
            <div className="todo">
                <span>Build React todo app today</span>
                <Options openOptions={openOptions}/>
            </div>

            <div className="todo">
                <span>Get enough sleep</span>
                <Options openOptions={openOptions}/>
            </div>

            <div className="todo">
                <span>Call Miku this evening</span>
                <Options openOptions={openOptions}/>
            </div>
        </div>
     );
}
 
export default Todo;