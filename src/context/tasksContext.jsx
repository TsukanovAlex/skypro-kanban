import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [taskList, setTaskList] = useState([]);

  return (
    <TaskContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </TaskContext.Provider>
  );
}

TaskProvider.propTypes = {
  children: PropTypes.obj,
};
