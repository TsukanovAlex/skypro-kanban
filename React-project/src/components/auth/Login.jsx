import { Link, useNavigate } from "react-router-dom";
import * as S from "./login&register.styled";
import { paths } from "../../lib/topic";
import PropTypes from "prop-types";

export default function Login({ setIsAuth }) {
  const navigate = useNavigate();

  function login() {
    setIsAuth(true);
    navigate(paths.MAIN);
  }

  return (
    <>
      <S.WrapperSignin>
        <S.ContainerSignin>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTtl>
                <h2>Вход</h2>
              </S.ModalTtl>
              <S.ModalFormLogin>
                <S.ModalInput
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                <S.ModalBtnEnter type="button" onClick={login}>
                  Войти
                </S.ModalBtnEnter>
                <S.ModalFormGroup>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to={paths.REGISTER}>Регистрируйтесь здесь</Link>
                </S.ModalFormGroup>
              </S.ModalFormLogin>
            </S.ModalBlock>
          </S.Modal>
        </S.ContainerSignin>
      </S.WrapperSignin>
    </>
  );
}

Login.propTypes = {
  setIsAuth: PropTypes.func.isRequired,
};
