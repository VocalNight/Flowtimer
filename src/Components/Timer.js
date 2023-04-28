import { useState } from "react";
import { useStopwatch } from "react-timer-hook";
import ReasonManager from "./ReasonManager";
import '../style/timerComponent.css'

export default function Timer({
  finishCurrentTask,
  managePausesAndFlow,
  task,
  isTimerRunning,
  manageTimer,
  isPause,
  setPause,
}) {
  const { seconds, minutes, hours, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  const [focusTime, setFocusTime] = useState(false);
  const [timeTaken, setTimeTaken] = useState({ hour: 0, minute: 0, second: 0 });
  const message = checkClockMessage();

  function checkClockMessage() {
    if (focusTime) {
      return "Time to focus on your task";
    } else if (!focusTime && isPause) {
      return "See you in a bit";
    } else if (!focusTime && !isPause) {
      return "Welcome";
    }
  }

  const padTime = (time) => {
    return String(time).length === 1 ? `0${time}` : `${time}`;
  };

  const getTime = () => {
    let current = new Date();
    let time =
      current.getHours() +
      ":" +
      current.getMinutes() +
      ":" +
      current.getSeconds();

    console.log(`Started timer at ${time}`);
  };

  const startTimer = () => {
    if (isPause) {
      start();
    } else if (!isPause) {
      start();
      setFocusTime(true);
    }
    manageTimer(!isRunning);
  };

  const timerWasPaused = () => {
    if (focusTime) {
      pause();

      managePausesAndFlow({
        type: "Flow",
        reason: "",
        duration: { hour: hours, minute: minutes, second: seconds },
      });

      reset(false, false);
      setFocusTime(false);
      setPause();
    } else {
      pause();
    }
    manageTimer(!isRunning);
  };

  function pauseAdded() {
    setPause();
    reset(false, false);
  }

  const finishTask = () => {
    finishCurrentTask();
    setFocusTime(false);
    reset(false, false);
  };

  return (
    <div id="timerMain">
      <div id="timerComponent">
        <div>{message}</div>
        <div id="clock">
          <span>{padTime(hours)}</span> : <span>{padTime(minutes)}</span> :{" "}
          <span>{padTime(seconds)}</span>
        </div>
        <div>
          {isRunning ? (
            <button onClick={() => timerWasPaused()}>Pause</button>
          ) : (
            <button onClick={startTimer}>Start</button>
          )}
          <button onClick={() => finishTask()}>Finish Task</button>
        </div>
      </div>
      <ReasonManager
        time={{ hours, minutes, seconds }}
        pauseAdded={pauseAdded}
        managePauses={managePausesAndFlow}
        task={task}
        isTimerRunning={isTimerRunning}
        isPause={isPause}
      />
    </div>
  );
}
