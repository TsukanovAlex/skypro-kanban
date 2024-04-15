import "./App.css";
import PopExit from "./components/popups/PopExit/PopExit";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import { useState, useEffect } from "react";
import cardList from "./utils/cardList";
import { GlobalStyle } from "./styles/global.styled";

function App() {
  const [taskList, setCardList] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header setCardList={setCardList} cardList={cardList} />
        <Main taskList={taskList} isLoading={isLoading} />
      </div>
    </>
  );
}

export default App;
