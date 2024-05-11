import { Link } from "react-router-dom";
import * as S from "../PopUser/popUser.styled";
import { Container } from "../../../styles/shared.styled";
import { paths } from "../../../lib/topic";
import { useUserContext } from "../../../context/hooks/useUser";

function PopUser() {
  const {user} = useUserContext()
  return (
    <Container>
      <S.PopUserSet>
        <S.PopUserSetName>{user.name}</S.PopUserSetName>
        <S.PopUserSetMail>{user.login}</S.PopUserSetMail>
        <S.PopUserSetTheme>
          <p>Темная тема</p>
          <S.CheckboxInput type="checkbox" />
        </S.PopUserSetTheme>
        <S.PopUserSetButton>
          <Link to={paths.EXIT}>Выйти</Link>
        </S.PopUserSetButton>
      </S.PopUserSet>
    </Container>
  );
}

export default PopUser;
