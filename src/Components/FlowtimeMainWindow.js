import { useState } from "react";
import TaskManager from "./TaskManager";
import Timer from "./Timer";
import ReasonManager from "./ReasonManager";
import { nanoid } from "nanoid";

export default function FlowTimeMainWindow() {
  const [task, setTask] = useState({id: nanoid() , name: '', pauses: []});

  function manageTask(taskName) {
    if (task) {
      setTask({...task, name: taskName});
      console.log('editing task')
    } else {

      setTask({name: '', pauses: []});
      console.log('creating task');
    }
  }

  function managePauses(pause) {
    let newPauses = task.pauses;
    newPauses.push(pause);
    setTask({ ...task, pauses: newPauses });
  }

  return (
    <div>
      <div>
        <div>
          <Timer />
        </div>
        <div>
          <ReasonManager  managePauses={managePauses} />
        </div>
      </div>
      <div>
        <TaskManager manageTask={manageTask} task={task} />
      </div>
      {task?.name}
      <p>{task?.id} </p>

    </div>
  );
}
