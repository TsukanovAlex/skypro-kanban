import { Link, useNavigate } from "react-router-dom";
import {
  ContainerSignin,
  Modal,
  ModalBlock,
  ModalBtnEnter,
  ModalFormGroup,
  ModalFormLogin,
  ModalInput,
  ModalTtl,
  WrapperSignin,
} from "./login&register.styled";
import { paths } from "../../lib/topic";
import { useState } from "react";
import { authTodos } from "../../api";
import PropTypes from "prop-types";
import { useUserContext } from "../../context/hooks/useUser";

export function Register() {
  const {userLogin} = useUserContext()
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()



  const handleAuthTodoClick = async () => {
    try {
      if (!name || !login || !password) {
        throw new Error("Заполните все поля");
      }

      const responseData = await authTodos(name, login, password);

      if (!responseData.user) {
        throw new Error("Ошибка при регистрации");
      }

      userLogin(responseData.user);
      navigate(paths.LOGIN)
    } catch (error) {
      setError(error.message);
      console.log(error.message)
    }
  };

  return (
    <>
      <WrapperSignin>
        <ContainerSignin>
          <Modal>
            <ModalBlock>
              <ModalTtl>
                <h2>Регистрация</h2>
              </ModalTtl>
              <ModalFormLogin id="formLogUp" action="#">
                <ModalInput
                  type="text"
                  value={name}
                  placeholder="Имя"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <ModalInput
                  type="text"
                  value={login}
                  placeholder="Логин"
                  onChange={(e) => {
                    setLogin(e.target.value);
                  }}
                />
                <ModalInput
                  type="password"
                  value={password}
                  placeholder="Пароль"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                {error && (
                  <p
                    style={{
                      color: "#b70000",
                      fontSize: 20,
                      textAlign: "center",
                    }}
                  >
                    {error}
                  </p>
                )}
                <ModalBtnEnter type="button" id="SignUpEnter" onClick={handleAuthTodoClick}>
                  Зарегистрироваться
                </ModalBtnEnter>
                <ModalFormGroup>
                  <p>
                    Уже есть аккаунт?{" "}
                    <Link to={paths.LOGIN}>Войдите здесь</Link>
                  </p>
                </ModalFormGroup>
              </ModalFormLogin>
            </ModalBlock>
          </Modal>
        </ContainerSignin>
      </WrapperSignin>
    </>
  );
}

export default Register;

Register.propTypes = {
  userLogin: PropTypes.func.isRequired,
};
