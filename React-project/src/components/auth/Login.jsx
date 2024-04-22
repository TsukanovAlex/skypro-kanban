
import { Link } from "react-router-dom"
import * as S from "../auth/login.styled"


export default function Login() {
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
                  <S.ModalInput name="login" id="formlogin" placeholder="Эл. почта" />
                  <S.ModalInput type="password" name="password" id="formpassword" placeholder="Пароль" />
                  <S.ModalBtnEnter><Link to="/">Войти</Link></S.ModalBtnEnter>
                  <S.ModalFormGroup>
                    <p>Нужно зарегистрироваться?</p>
                    <Link to="/register">Регистрируйтесь здесь</Link>
                  </S.ModalFormGroup>
                </S.ModalFormLogin>
              </S.ModalBlock>
            </S.Modal>
          </S.ContainerSignin>
        </S.WrapperSignin>
      </>
    );
  }
