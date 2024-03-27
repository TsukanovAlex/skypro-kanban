import "./App.css";
import PopExit from "./components/popups/PopExit/PopExit";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import { useState } from "react";
import cardList from "./utils/cardList";

function App() {
  const [taskList, setCardList] = useState(cardList)

  return (
    <div className="wrapper">
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header setCardList={setCardList} cardList={cardList}/>
      <Main taskList={taskList}/>
    </div>
  );
}

export default App;
