export default function FlowVisualizer({ task }) {
  return (
    <div>
      <div>
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
