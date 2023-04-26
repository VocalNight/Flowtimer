import { useStopwatch } from "react-timer-hook";

export default function Timer() {
  const { seconds, minutes, hours, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  const padTime = (time) => {
    return String(time).length === 1 ? `0${time}` : `${time}`;
  };

  const getTime = () => {
    let current = new Date();
    let time = current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds();
    
    console.log(`Started timer at ${time}`);
  }

  const startTimer = () => {
    start();
    getTime();
  }

  return (
    <div>
      Flowtime
      <div>
        <div>
          <span>{padTime(hours)}</span> : <span>{padTime(minutes)}</span> :{" "}
          <span>{padTime(seconds)}</span>
        </div>
        <p>{isRunning ? "Running" : "Not running"}</p>
        <div>
          <button onClick={startTimer}>Start</button>
          <button onClick={pause}>Pause</button>
          <button onClick={() => reset(false, false)}>Reset</button>
        </div>
      </div>
    </div>
  );
}
