import { Link } from "react-router-dom"
import * as S from "../PopExit/popExit.styled"
import { paths } from "../../../lib/topic"
import { useUserContext } from "../../../context/hooks/useUser";


function PopExit(){
  const {userExit} = useUserContext()
  
    return (
    <S.PopExit id="popExit">
    <S.PopExitContainer>
      <S.popExitBlock>
        <S.PopExitTtl>
          <h2>Выйти из аккаунта?</h2>
        </S.PopExitTtl>
          <S.popExitForm>
            <S.ButtonExitYes onClick={userExit}>
              <Link onClick={paths.LOGIN}>Да, выйти</Link>
            </S.ButtonExitYes>
            <S.ButtonExitNo>
              <Link to={paths.MAIN}>Нет, остаться</Link> 
            </S.ButtonExitNo>
          </S.popExitForm>
  
      </S.popExitBlock>
    </S.PopExitContainer>
  </S.PopExit>)

}

export default PopExit