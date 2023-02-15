const Options = ({openOptions}) => {
    return ( 
        <div className="options">
            <img src="./images/ellipsis-solid.svg" alt="" onClick={openOptions}/>

        <ul className="todo-options">
            <li><img src="./images/pen-to-square-solid.svg" alt="Edit Icon"/> Edit</li>
            <li><img src="./images/trash-solid.svg" alt="Delete Icon"/> Delete</li>
        </ul>
        </div>
     );
}
 
export default Options;