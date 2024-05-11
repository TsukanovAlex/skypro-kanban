import Calendar from "../../calendar/Calendar";
import * as S from "./popNewCard.styled";

function PopNewCard() {
  return (
    <S.PopNewCard>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <S.PopNewCardClose>✖</S.PopNewCardClose>
            <S.popNewCardWrap>
              <S.PopNewCardForm>
                <S.FormNewBlock>
                  <S.SubTtl htmlFor="formTitle">Название задачи</S.SubTtl>
                  <S.FormNewInput
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
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    defaultValue={""}
                  />
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar />
            </S.popNewCardWrap>
            <S.Categories>
              <S.SubTtl>
                <S.CategoriesP>Категория</S.CategoriesP>
              </S.SubTtl>
              <S.CategoriesThemes>
                <S.CategoriesTheme className="_orange _active-category">
                  <p className="_orange">Web Design</p>
                </S.CategoriesTheme>
                <S.CategoriesTheme className=" _green">
                  <p className="_green">Research</p>
                </S.CategoriesTheme>
                <S.CategoriesTheme className=" _purple">
                  <p className="_purple">Copywriting</p>
                </S.CategoriesTheme>
              </S.CategoriesThemes>
            </S.Categories>
            <S.BtnFormNewCreate>Создать задачу</S.BtnFormNewCreate>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}

export default PopNewCard;
