import { useState, useEffect } from "react";
import { Main } from "../components/main/Main";
import { Outlet } from "react-router-dom";
import { getTodos } from "../api";
import { useUserContext } from "../context/hooks/useUser";
import { useTaskContext } from "../context/hooks/useTasks";

const MainPage = () => {
  const {setTaskList} = useTaskContext();
  const {user} = useUserContext()
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  

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
      <Main isLoading={isLoading} error={error} />
      <Outlet />
    </>
  );
};

export default MainPage;
