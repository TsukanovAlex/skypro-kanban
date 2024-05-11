import { useState, useEffect } from "react";
import { Main } from "../components/main/Main";
import { Outlet } from "react-router-dom";
import { getTodos } from "../api";
import { useUserContext } from "../context/hooks/useUser";

const MainPage = () => {
  const {user} = useUserContext()
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        if (user && user.token) {
          const response = await getTodos(user.token); 
          setTaskList(response.tasks);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodos();
  }, [user]);

  return (
    <>
      <Main taskList={taskList} setTaskList={setTaskList} isLoading={isLoading} error={error} />
      <Outlet />
    </>
  );
};

export default MainPage;
