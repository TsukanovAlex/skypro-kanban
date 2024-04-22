
import { ContainerSignin, Modal, ModalBlock, ModalBtnEnter, ModalFormGroup, ModalFormLogin, ModalInput, ModalTtl, WrapperSignin } from "./login.styled";



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
                <ModalInput type="text" name="first-name" id="first-name" placeholder="Имя" />
                <ModalInput type="text" name="login" id="loginReg" placeholder="Эл. почта" />
                <ModalInput type="password" name="password" id="passwordFirst" placeholder="Пароль" />
                <ModalBtnEnter id="SignUpEnter"><a href="../main.html">Зарегистрироваться</a></ModalBtnEnter>
                <ModalFormGroup>
                  <p>Уже есть аккаунт? <a href="signin.html">Войдите здесь</a></p>
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
