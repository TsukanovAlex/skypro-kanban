import { Link } from "react-router-dom";
import * as S from "./login&register.styled";
import { paths } from "../../lib/topic";
import PropTypes from "prop-types";
import { loginTodos } from "../../api";
import { useState } from "react";

export default function Login({ userLogin }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginTodoClick = async () => {
    try {
      if (!login || !password) {
        throw new Error("Введите логин и пароль");
      }
      const responseData = await loginTodos(login, password);
      
      if (!responseData.user) {
        throw new Error("Неправильный логин или пароль");
      }
      
      userLogin(responseData.user);
    } catch (error) {
      setError(error.message);
    }
  };

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
                  type="text"
                  value={login}
                  placeholder="Логин"
                  onChange={(e) => {
                    setLogin(e.target.value);
                  }}
                />
                <S.ModalInput
                  type="password"
                  value={password}
                  placeholder="Пароль"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                {error && (
                  <p style={{ color: '#b70000', fontSize: 20, textAlign: 'center' }}>
                    {error}
                  </p>
                )}
                <S.ModalBtnEnter type="button" onClick={handleLoginTodoClick}>
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
  userLogin: PropTypes.func.isRequired, 
};
