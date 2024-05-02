  import { useState, useEffect } from "react";
  // import cardList from "../utils/cardList";
  import { Main } from "../components/main/Main";
  import { Outlet } from "react-router-dom";
  import { getTasks } from "../api";


  const MainPage = () => {
    // eslint-disable-next-line
    const [taskList, setTaskList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      getTasks().then((taskList) => {
        setTaskList(taskList.tasks);
        setIsLoading(false);
      });
    }, []);

    return (
      <>
        <Main taskList={taskList} isLoading={isLoading} />
        <Outlet />
      </>
    );
  };

  export default MainPage;
