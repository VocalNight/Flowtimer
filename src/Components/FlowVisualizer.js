export default function FlowVisualizer({ task }) {

  const padTime = (time) => {
    return String(time).length === 1 ? `0${time}` : `${time}`;
  };


  return (
    <div>
      <div>
        <table>
          <tr>
            <th>Type</th>
            <th>Reason</th>
            <th>Duration</th>
          </tr>
          {task.pausesAndFlow.map((pause) => (
            <tr>
              <td>{pause.type}</td>
              <td>{pause.reason}</td>
              <td>{padTime(pause.duration.hour)} : {padTime(pause.duration.minute)} : {padTime(pause.duration.second)}</td>
            </tr>
          ))}
        </table>



        <ul>
          {task.pausesAndFlow.map((pause) => (
            <li key={pause.reason}>
              {pause.type === "Flow" ? (
                <div>
                  <div>{pause.type} </div>
                  {pause.duration.hour <= 0 ? (
                    <div>
                      Hours: {pause.duration.hour} Minutes:{" "}
                      {pause.duration.minute} Seconds: {pause.duration.second}
                    </div>
                  ) : (
                    <div>
                      Minutes: {pause.duration.minute} Seconds:{" "}
                      {pause.duration.second}
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <div>
                    {pause.type} - {pause.reason}
                  </div>
                  {pause.duration.hour <= 0 ? (
                    <div>
                      Hours: {pause.duration.hour} Minutes:{" "}
                      {pause.duration.minute} Seconds: {pause.duration.second}
                    </div>
                  ) : (
                    <div>
                      Minutes: {pause.duration.minute} Seconds:{" "}
                      {pause.duration.second}
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
