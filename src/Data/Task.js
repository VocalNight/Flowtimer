const Task = (taskName) => {
    let pauses = [];
    let name = taskName;

    const getPauses = () => pauses;
    const getName = () => name;

    const addPause = (pause) => {
        pauses.push(pause);
    }
    
    return {
        getPauses, getName, addPause, name
    }
}

export default Task;
