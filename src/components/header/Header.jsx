import PropTypes from "prop-types";
import { useState } from "react";
import PopNewCard from "../popups/PopNewCard/PopNewCard";
import PopUser from "../popups/PopUser/PopUser";
import * as S from "./header.styled";
import { Container } from "../../styles/shared.styled";
import { Link } from "react-router-dom";
import { paths } from "../../lib/topic";

function Header({ user }) {
  const [isOpen, setOpen] = useState(false);
  const [isOpenNewCard, setOpenNewCard] = useState(false);

  const openUser = () => {
    setOpen(!isOpen);
  };

  const openNewCard = () => {
    setOpenNewCard(!isOpenNewCard);
  };

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
            <S.HeaderBtn onClick={openNewCard}>Создать новую задачу</S.HeaderBtn>
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
      {isOpenNewCard && <PopNewCard />}
    </S.Header>
  );
}

Header.propTypes = {
  user: PropTypes.object,
};

export default Header;