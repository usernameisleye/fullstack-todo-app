

const Todo = () => {
    return (
        <div className="todo-list">
            <div className="todo">
                <span>Build React todo app today</span>
                <div className="buttons">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>

            <div className="todo">
                <span>Get enough sleep</span>
                <div className="buttons">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>

            <div className="todo">
                <span>Call Miku this evening</span>
                <div className="buttons">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
     );
}
 
export default Todo;