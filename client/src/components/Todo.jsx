import Options from './Options';

const Todo = ({openOptions, todo, deleteTodo}) => {
    return (
        <div className="todo-list">
            <div className="todo">
                <span>{todo.description}</span>
                <Options openOptions={openOptions} todo={todo} deleteTodo={deleteTodo}/>
            </div>
        </div>
     );
}
 
export default Todo;