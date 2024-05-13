import { useState } from "react";
import Calendar from "../../calendar/Calendar";
import * as S from "./popNewCard.styled";
import { postTodos } from "../../../api";
import { useUserContext } from "../../../context/hooks/useUser";
import { useTaskContext } from "../../../context/hooks/useTasks";

function PopNewCard() {
  const {setTaskList} = useTaskContext()
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
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const taskData = { ...newTask, date: selected };
postTodos({...taskData, token: user?.token}).then((responseData) => {
  setTaskList(responseData.tasks);
      console.log(responseData)
      closeNewCard()
    }).catch((err) => {
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
                <label>
                  Web Design{" "}
                  <input
                    onChange={(e) =>
                      setNewTask({ ...newTask, topic: e.target.value })
                    }
                    type="radio"
                    value="Web Design"
                  />
                </label>
                <label>
                  Research{" "}
                  <input
                    onChange={(e) =>
                      setNewTask({ ...newTask, topic: e.target.value })
                    }
                    type="radio"
                    value="Research"
                  />
                </label>
                <label>
                  Copywriting{" "}
                  <input
                    onChange={(e) =>
                      setNewTask({ ...newTask, topic: e.target.value })
                    }
                    type="radio"
                    value="Copywriting"
                  />
                </label>

                {/* <S.CategoriesTheme className="_orange _active-category">
                  <p className="_orange">Web Design</p>
                </S.CategoriesTheme>
                <S.CategoriesTheme className=" _green">
                  <p className="_green">Research</p>
                </S.CategoriesTheme>
                <S.CategoriesTheme className=" _purple">
                  <p className="_purple">Copywriting</p>
                </S.CategoriesTheme> */}
              </S.CategoriesThemes>
            </S.Categories>
            <S.BtnFormNewCreate onClick={handleSubmit}>Создать задачу</S.BtnFormNewCreate>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}

export default PopNewCard;
