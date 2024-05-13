import { useState } from "react";
import Calendar from "../../calendar/Calendar";
import * as S from "./popNewCard.styled";
import { postTodos } from "../../../api";
import { useUserContext } from "../../../context/hooks/useUser";
import { useTaskContext } from "../../../context/hooks/useTasks";
import { topicWithColors } from "../../../lib/topic";

function PopNewCard() {
  const { setTaskList } = useTaskContext();
  const { user } = useUserContext();
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState();
  const [isOpenNewCard, setOpenNewCard] = useState(true);

  const closeNewCard = () => {
    setOpenNewCard(false);
  };

  const [newTask, setNewTask] = useState({
    title: "",
    topic: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const taskData = { ...newTask, date: selected };
    postTodos({ ...taskData, token: user?.token })
      .then((responseData) => {
        setTaskList(responseData.tasks);
        console.log(responseData);
        closeNewCard();
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <S.PopNewCard style={{ display: isOpenNewCard ? "block" : "none" }}>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <S.PopNewCardClose onClick={closeNewCard}>✖</S.PopNewCardClose>
            <S.popNewCardWrap>
              <S.PopNewCardForm>
                <S.FormNewBlock>
                  <S.SubTtl htmlFor="formTitle">Название задачи</S.SubTtl>
                  <S.FormNewInput
                    onChange={(e) =>
                      setNewTask({ ...newTask, title: e.target.value })
                    }
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus=""
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <S.SubTtl>Описание задачи</S.SubTtl>
                  <S.FormNewArea
                    onChange={(e) =>
                      setNewTask({ ...newTask, description: e.target.value })
                    }
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    defaultValue={""}
                  />
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar selected={selected} setSelected={setSelected} />
            </S.popNewCardWrap>
            <S.Categories>
              <S.SubTtl>
                <S.CategoriesP>Категория</S.CategoriesP>
              </S.SubTtl>
              <S.CategoriesThemes>
                {topicWithColors.map((item, index) => {
                  return (
                    <S.CategoriesTheme
                      key={index}
                      htmlFor={index}
                      $topicColor={[item.color]}
                      style={newTask.topic === item.topic ? { opacity: 1 } : {}}
                    >
                      {item.topic}

                      <input
                        onChange={handleInputChange}
                        type="radio"
                        id={index}
                        name="topic"
                        value={item.topic}
                      />
                    </S.CategoriesTheme>
                  );
                })}
              </S.CategoriesThemes>
            </S.Categories>
            <S.BtnFormNewCreate onClick={handleSubmit}>
              Создать задачу
            </S.BtnFormNewCreate>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}

export default PopNewCard;
