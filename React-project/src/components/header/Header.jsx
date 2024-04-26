import PropTypes from "prop-types";
import { useState } from "react";
import PopUser from "../popups/PopUser/PopUser";
import * as S from "./header.styled";
import { Container } from "../../styles/shared.styled";
import { Link } from "react-router-dom";
import { paths } from "../../lib/topic";

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
    console.log("Adding new card:", newCard); // Проверяем, что создается новая задача
    setCardList([...cardList, newCard]);
  }

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <Link to={paths.MAIN}>
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </S.HeaderLogo>

          <S.HeaderLogoDark>
          <Link to={paths.MAIN}>
              <img src="images/logo_dark.png" alt="logo" />
            </Link>
          </S.HeaderLogoDark>
          <S.HeaderNav>
            <S.HeaderBtn onClick={onClick}>Создать новую задачу</S.HeaderBtn>
            <a
              onClick={openUser}
              href="#user-set-target"
              className="header__user _hover02"
            >
              Ivan Ivanov
            </a>
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>

      {isOpen && <PopUser />}
    </S.Header>
  );
}

Header.propTypes = {
  cardList: PropTypes.array.isRequired,
  setCardList: PropTypes.func.isRequired,
};

export default Header;
