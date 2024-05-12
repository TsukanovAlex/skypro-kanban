import { useContext } from "react";
import { TaskContext } from "../tasksContext";


export function useTaskContext() {
  return useContext(TaskContext);
}