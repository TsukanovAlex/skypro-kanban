import { useState, useEffect } from "react";
import cardList from "../utils/cardList";
import { Main } from "../components/main/Main";
import { Outlet } from "react-router-dom";


const MainPage = () => {
  // eslint-disable-next-line
  const [taskList, setTaskList] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Main taskList={taskList} isLoading={isLoading} />
      <Outlet />
    </>
  );
};

export default MainPage;
