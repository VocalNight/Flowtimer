import { useState } from "react";

export default function ReasonManager({ pauseAdded, managePauses, task, isTimerRunning, isPause, time }) {
  const [pause, setPause] = useState({ type: "", reason: "" });

  function validateSelect(e) {
    let value = e.target.value;
    setPause({ ...pause, type: value });
  }

  function setText(e) {
    let value = e.target.value;
    setPause({...pause, reason: value});
  }

  function validatePause(newPause) {
    pauseAdded();
    console.log(time);
    managePauses({...newPause,
      duration: {hour: time.hours, minute: time.minutes, second: time.seconds }});
    setPause({type: "", reason: ""});

  }

  return (
    <div>
      <div>
        <select
          onChange={(e) => validateSelect(e)}
          className="form-control"
          value={pause.type}
        >
          <option value="" disabled defaultValue>
            Reason for pause
          </option>
          <option value="Break">Break</option>
          <option value="Interruption">Interruption</option>
        </select>
      </div>
      <div>
        <textarea 
        name="pausereason" 
        id="pausereason" 
        cols="30" 
        rows="10"
        value={pause.reason}
        onChange={(e) => setText(e)}></textarea>
      </div>
      <div>
        <button disabled={!isPause || (isPause && isTimerRunning)} onClick={() => validatePause(pause)}>Confirm</button>
      </div>
    </div>
  );
}
