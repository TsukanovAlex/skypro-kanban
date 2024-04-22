import { Link } from "react-router-dom"
import * as S from "../PopUser/popUser.styled"

function PopUser() {
    return (
        <S.PopUserSet>
            <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
            <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
            <S.PopUserSetTheme>
              <p>Темная тема</p>
              <S.CheckboxInput type="checkbox"/>
            </S.PopUserSetTheme>
            <S.PopUserSetButton>
              <Link to="/exit">Выйти</Link>
            </S.PopUserSetButton>
        </S.PopUserSet>
    )
}

export default PopUser