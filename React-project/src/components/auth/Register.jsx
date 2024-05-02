import { Link } from "react-router-dom";
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

export function Register(userLogin) {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleAuthTodoClick = async () => {
    await authTodos(name, login, password).then((responseData)=>{userLogin(responseData.user)})
  }

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
                  onSubmit={handleSubmit}
                  placeholder="Имя"
                  onChange={(e)=>{setName(e.target.value)}}
                />
                <ModalInput
                  type="text"
                  value={login}
                  onSubmit={handleSubmit}
                  placeholder="Логин"
                  onChange={(e)=>{setLogin(e.target.value)}}
                />
                <ModalInput
                  type="password"
                  value={password}
                  onSubmit={handleSubmit}
                  placeholder="Пароль"
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
                <ModalBtnEnter id="SignUpEnter" onClick={handleAuthTodoClick}>
                  <Link to={paths.MAIN}>
                  Зарегистрироваться
                  </Link>
                </ModalBtnEnter>
                <ModalFormGroup>
                  <p>
                    Уже есть аккаунт? <Link to={paths.LOGIN}>Войдите здесь</Link>
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
