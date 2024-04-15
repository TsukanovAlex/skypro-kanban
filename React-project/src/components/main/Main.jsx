import { Container } from "../../styles/shared.styled";
import statusList from "../../utils/statusList";
import Column from "../column/Column";
import PropTypes from "prop-types";
import * as S from "../main/main.styled";

function Main({ taskList, isLoading }) {
  return (
    <S.Main>
      <Container>
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
                    cards={taskList.filter(
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

export default Main;
