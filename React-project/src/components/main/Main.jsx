import { Container } from "../../styles/shared.styled";
import statusList from "../../utils/statusList";
import Column from "../column/Column";
import PropTypes from "prop-types";
import * as S from "./main.styled";
import Header from "../header/Header";
import { useState } from "react";

export function Main({ taskList, isLoading, error, user }) {
  const [cardList, setCardList] = useState([]);

  return (
    <S.Main>
      <Header cardList={cardList} setCardList={setCardList} user={user}/>
      <Container>
        <S.MainBlock>
          <S.MainContent>
            {isLoading ? (
              "Данные загружаются. Пожалуйста, подождите..."
            ) : (
              <>
                {statusList.map((status) => (
                  <Column
                    key={status}
                    status={status}
                    cards={taskList.filter( 
                      (tasks) =>
                      tasks.status.toLowerCase() === status.toLowerCase()
                    )}
                  />
                ))}
              </>
            )}
            {error && (<p style={{color:'#b70000'}}>Произошла ошибка. Попробуйте зайти позже...</p>)}
          </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main>
  );
}

Main.propTypes = {
  taskList: PropTypes.array.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};
