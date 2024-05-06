import { Link } from "react-router-dom"
import * as S from "../PopExit/popExit.styled"
import { paths } from "../../../lib/topic"
import PropTypes from "prop-types";


function PopExit({userExit}){
  
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

PopExit.propTypes = {
  userExit: PropTypes.func.isRequired,
};
export default PopExit