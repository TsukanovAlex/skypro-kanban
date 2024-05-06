import PropTypes from "prop-types";
import { useState } from "react";
import PopUser from "../popups/PopUser/PopUser";
import * as S from "./header.styled";
import { Container } from "../../styles/shared.styled";
import { Link } from "react-router-dom";
import { paths } from "../../lib/topic";

function Header({ taskList, setTaskList, user }) {
  const [isOpen, setOpen] = useState(false);

  const openUser = () => {
    setOpen(!isOpen);
  };

  function onClick() {
    const newTask = {
      _id: taskList.length + 1,
      title: "Новая задача",
      topic: "Web Design",
      date: "30.10.23",
      status: "Без статуса",
    };
    setTaskList([...taskList, newTask]);
    console.log("Updated card list:", [...taskList, newTask]);
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
              {user.name}
            </a>
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>

      {isOpen && <PopUser user={user} />}
    </S.Header>
  );
}

Header.propTypes = {
  taskList: PropTypes.array.isRequired,
  setTaskList: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default Header;
