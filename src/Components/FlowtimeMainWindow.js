import { useState } from "react";
import TaskManager from "./TaskManager";
import Timer from "./Timer";
import { nanoid } from "nanoid";

export default function FlowTimeMainWindow() {
  const [task, setTask] = useState({ id: nanoid(), name: "", pausesAndFlow: [] });
  const [isPause, setIsPause] = useState(false);
  const [isTimerRunning, setIsTimmerRunning] = useState(false);
  const [taskDuration, setTaskDuration] = useState({hours: 0, minutes: 0, seconds: 0});

  function manageTask(taskName) {
    if (task) {
      setTask({ ...task, name: taskName });
    }
  }

  function finishCurrentTask() {
    console.log('hi');
    setTaskDuration({hours: 0, minutes: 0, seconds: 0})
    setTask({id: nanoid(), name: "", pausesAndFlow: [] });
  }

  function managePausesAndFlow(pause) {
    let newPausesAndFlow = [...task.pausesAndFlow, pause];

    manageTaskDuration(pause.duration);

    setTask({ ...task, pausesAndFlow: newPausesAndFlow });
  }

  function manageTaskDuration(time) {

    console.log(calculateTime(time));
    setTaskDuration(calculateTime(time));

  }

  function calculateTime(time) {
    let seconds = taskDuration.seconds + time.second;
    let minutes = taskDuration.minutes + time.minute;
    let hours = taskDuration.hours + time.hour;
    if (seconds > 60) {
      seconds -= 60;
      minutes += 1;
    }
    if (minutes > 60) {
      minutes -= 60;
      hours += 1;
    }

    return {hours, minutes, seconds}
  }

  function setPauseOrTask() {
    setIsPause(!isPause);
  }

  function manageTimer(isRunning) {
    setIsTimmerRunning(isRunning);
  }

  return (
    <div>
      <div>
        <div>
          <Timer
          manageTaskDuration={manageTaskDuration}
            finishCurrentTask={finishCurrentTask}
            managePausesAndFlow={managePausesAndFlow}
            task={task}
            isTimerRunning={isTimerRunning}
            manageTimer={manageTimer}
            isPause={isPause}
            setPause={setPauseOrTask}
          />
        </div>
      </div>
      <div>
        <TaskManager manageTask={manageTask} task={task} />
      </div>
      {task?.name}
      <p>{task?.id} </p>

      <p>{isTimerRunning ? "yes" : "no"}</p>
      <p>hours: {taskDuration.hours} - Minutes: {taskDuration.minutes} - Seconds: {taskDuration.seconds}</p>
    </div>
  );
}
