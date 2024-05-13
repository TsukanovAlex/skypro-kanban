import { Container } from "../../styles/shared.styled";
import statusList from "../../utils/statusList";
import Column from "../column/Column";
import PropTypes from "prop-types";
import * as S from "./main.styled";
import Header from "../header/Header";
import { useTaskContext } from "../../context/hooks/useTasks";
// import { useUserContext } from "../../context/hooks/useUser";


export function Main({isLoading, error }) {
// const {user} = useUserContext()
const {taskList, setTaskList} = useTaskContext()
  return (
    <S.Main>
      <Header taskList={taskList} setTaskList={setTaskList} />
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
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};
