import { useState } from "react";
import FlowVisualizer from "./FlowVisualizer";

export default function TaskManager({manageTask, task}) {

    const [name, setName] = useState('');

    return(
        <div>
            <div>
                <input 
                type="text"
                 name="" 
                 value={name}
                 onInput={e => setName(e.target.value)} 
                 placeholder="What are you working on now?" id="" />
                <button onClick={() => manageTask(name)}>Confirm</button>
            </div>
            <div>
                <FlowVisualizer task={task}/>
            </div>
        </div>
    )
}
