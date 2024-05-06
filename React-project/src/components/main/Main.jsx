import { Container } from "../../styles/shared.styled";
import statusList from "../../utils/statusList";
import Column from "../column/Column";
import PropTypes from "prop-types";
import * as S from "./main.styled";
import Header from "../header/Header";


export function Main({ taskList, setTaskList, isLoading, error, user }) {

  return (
    <S.Main>
      <Header taskList={taskList} setTaskList={setTaskList} user={user}/>
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
          </S.MainContent>
        </S.MainBlock>
        {error && (
  <p style={{ color: '#b70000', fontSize: 40, textAlign: 'center' }}>
    Произошла ошибка. Попробуйте зайти позже...
  </p>
)}
      </Container>
    </S.Main>
  );
}

Main.propTypes = {
  taskList: PropTypes.array.isRequired,
  setTaskList: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};
