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

export function Register() {
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
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
                <ModalInput
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                />
                <ModalInput
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                />
                <ModalBtnEnter id="SignUpEnter">
                  <a href="#">Зарегистрироваться</a>
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
