import { Link, useNavigate, useParams } from "react-router-dom";
import { paths, status, topicHeader } from "../../../lib/topic";
import Calendar from "../../calendar/Calendar";
import * as S from "./popBrowse.styled";
import { useState, useEffect } from "react";
import { useUserContext } from "../../../context/hooks/useUser";
import { deleteTodo, editTodo } from "../../../api";
import { useTaskContext } from "../../../context/hooks/useTasks";

function PopBrowse() {
  const { id } = useParams();
  const { taskList, setTaskList } = useTaskContext();
  const { user } = useUserContext();
  const navigate = useNavigate();

  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(null);
  const [isEdited, setIsEdited] = useState(false);
  const [statusCard, setStatusCard] = useState("");
  const [initialTask, setInitialTask] = useState({
    title: "",
    description: "",
    topic: "",
    date: "",
    status: "",
  });
  const [editTask, setEditTask] = useState({
    title: "",
    description: "",
    topic: "",
    date: "",
    status: "",
  });

  useEffect(() => {
    const card = taskList.find((item) => item._id === id);
    if (card) {
      const taskData = {
        title: card.title,
        description: card.description,
        topic: card.topic,
        date: card.date,
        status: card.status,
      };
      setEditTask(taskData);
      setInitialTask(taskData);
      setStatusCard(card.status);
    }
  }, [id, taskList]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditTask({ ...editTask, [name]: value });
  };

  const editedTask = () => {
    const requestData = {
      token: user?.token,
      id,
      title: editTask.title,
      status: statusCard,
      description: editTask.description,
      topic: editTask.topic,
    };


    editTodo(requestData)
      .then((responseData) => {
        setTaskList(responseData.tasks);
        navigate(paths.MAIN);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const cancelEditing = () => {
    setEditTask(initialTask);
    setStatusCard(initialTask.status);
    setIsEdited(false);
  };

  function deleteTask(e) {
    e.preventDefault();
    deleteTodo({ token: user?.token, id })
      .then((responseData) => {
        setTaskList(responseData.tasks);
        navigate(paths.MAIN);
      })
      .catch((err) => {
        setError(err.message);
      });
  }

  return (
    <S.PopBrowse>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>Задача № {id}</S.PopBrowseTtl>
              <S.PopBrowseCategoriesTheme $topicColor={topicHeader[editTask.topic]}>
                <p>{editTask.topic}</p>
              </S.PopBrowseCategoriesTheme>
            </S.PopBrowseTopBlock>
            <S.Status>
              <p>Статус</p>
              <S.StatusThemes>
                {status.map((item, index) => (
                  <S.StatusTheme
                    onClick={() => isEdited && setStatusCard(item)}
                    key={index}
                    style={statusCard === item ? { backgroundColor: "#94a6be", color: "#ffffff" } : {}}
                  >
                    {item}
                    <input
                      onChange={handleInputChange}
                      type="radio"
                      name="status"
                      value={item}
                      checked={statusCard === item}
                      disabled={!isEdited}
                    />
                  </S.StatusTheme>
                ))}
              </S.StatusThemes>
            </S.Status>
            <S.PopBrowseWrap>
              <S.PopBrowseForm>
                <S.FormBrowseBlock>
                  <S.PopBrowseLabel>
                    <p>Описание задачи</p>
                  </S.PopBrowseLabel>
                  <S.FormBrowseArea
                    onChange={handleInputChange}
                    value={editTask.description}
                    disabled={!isEdited}
                    name="description"
                    id="textArea01"
                    placeholder="Введите описание задачи..."
                  />
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar selected={selected} setSelected={setSelected} isEdited={isEdited} />
            </S.PopBrowseWrap>
            <S.PopBrowseBtnEdit>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <S.BtnGroup>
                {!isEdited && (
                  <S.BtnBg onClick={() => setIsEdited(true)}>Редактировать задачу</S.BtnBg>
                )}
                {isEdited && (
                  <S.BtnBg onClick={editedTask}>Сохранить</S.BtnBg>
                )}
                {isEdited && (
                  <S.BtnBor onClick={cancelEditing}>Отменить</S.BtnBor>
                )}
                <S.BtnBor>
                  <a onClick={deleteTask}>Удалить задачу</a>
                </S.BtnBor>
              </S.BtnGroup>
              <S.BtnBg>
                <Link to={paths.MAIN}>Закрыть</Link>
              </S.BtnBg>
            </S.PopBrowseBtnEdit>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}

export default PopBrowse;
