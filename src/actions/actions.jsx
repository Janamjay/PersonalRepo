export function addTask(task) {
    return {
      type: 'ADD_TASK',
      payload: task,
    };
  }
  
  export function toggleTask(id) {
    return {
      type: 'TOGGLE_TASK',
      payload: id,
    };
  }
  
  export function deleteTask(id) {
    return {
      type: 'DELETE_TASK',
      payload: id,
    };
  }
  