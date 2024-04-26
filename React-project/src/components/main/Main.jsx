import { Container } from "../../styles/shared.styled";
import statusList from "../../utils/statusList";
import Column from "../column/Column";
import PropTypes from "prop-types";
import * as S from "./main.styled";
import Header from "../header/Header";
import { useState } from "react";

export function Main({ taskList, isLoading }) {
  const [cardList, setCardList] = useState(taskList);

  return (
    <S.Main>
      <Container>
        <Header cardList={cardList} setCardList={setCardList} />
        <S.MainBlock>
          <S.MainContent>
            {isLoading ? (
              "Данные загружаются"
            ) : (
              <>
                {statusList.map((status) => (
                  <Column
                    key={status}
                    status={status}
                    cards={cardList.filter( // Заменяем taskList на cardList здесь
                      (card) =>
                        card.status.toLowerCase() === status.toLowerCase()
                    )}
                  />
                ))}
              </>
            )}
          </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main>
  );
}

Main.propTypes = {
  taskList: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
