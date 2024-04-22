import "./App.css";
import PopExit from "./components/popups/PopExit/PopExit";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import { useState, useEffect } from "react";
import cardList from "./utils/cardList";
import { GlobalStyle } from "./styles/global.styled";
import { Wrapper } from "./styles/shared.styled";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";



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
      <Wrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header setCardList={setCardList} cardList={cardList} />
        <Main taskList={taskList} isLoading={isLoading} />
        <Login/>
        <Register/>
      </Wrapper>
      </>
  );
}

export default App;
