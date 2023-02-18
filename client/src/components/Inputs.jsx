import { useState } from "react";

const Inputs = () => {
    const [description, setDescription] = useState("");

    //creating todo by getting input value(description)
    const createTodo = async() => {
        try{
                const body = {description}
                const res = await fetch("http://localhost:5000/todos", {
                method: "POST",
                header: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

            window.location = "/";
        }catch(err){
            console.error(err.message);
        }
    }


    return ( 
        <div className="inputs">
            <input type="text" placeholder="Type in Todo..."
             value={description} 
             onChange={e => setDescription(e.target.value)}
             />

            <button onClick={createTodo}>Add Todo</button>
        </div>
     );
}
 
export default Inputs;