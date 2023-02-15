import menu from '../ellipsis-solid.svg'
import Options from './Options';

const Todo = () => {
    return (
        <div className="todo-list">
            <div className="todo">
                <span>Build React todo app today</span>

                <div className="options">
                    <img src={menu} alt=""/>
                    <Options />
                </div>
            </div>

            <div className="todo">
                <span>Get enough sleep</span>

                <div className="options">
                    <img src={menu} alt=""/>
                    <Options />
                </div>
            </div>

            <div className="todo">
                <span>Call Miku this evening</span>

                <div className="options">
                    <img src={menu} alt=""/>
                    <Options />
                </div>
            </div>
        </div>
     );
}
 
export default Todo;