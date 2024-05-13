import { createContext, useState } from "react";


export const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [taskList, setTaskList] = useState([]);

  return (
    <TaskContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </TaskContext.Provider>
  );
}


