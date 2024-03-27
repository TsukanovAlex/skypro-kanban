import PropTypes from 'prop-types';
import { useState } from "react";
import PopUser from "../popups/PopUser/PopUser";

function Header({ cardList, setCardList }) {
  const [isOpen, setOpen] = useState(false);

  const openUser = () => {
    setOpen(!isOpen);
  };

  function onClick() {
    const newCard = {
      id: cardList.length + 1,
      title: "Новая задача",
      theme: "Web Design",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCardList([...cardList, newCard]);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="/" target="_self">
              <img src="../public/images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="/" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button onClick={onClick} className="header__btn-main-new _hover01" id="btnMainNew">
              Создать новую задачу
            </button>
            <a
              onClick={openUser}
              href="#user-set-target"
              className="header__user _hover02"
            >
              Ivan Ivanov
            </a>
          </nav>
        </div>
      </div>

      {isOpen && <PopUser />}
    </header>
  );
}

Header.propTypes = {
  cardList: PropTypes.array.isRequired,
  setCardList: PropTypes.func.isRequired
};

export default Header;