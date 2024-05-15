import { Link, useParams } from "react-router-dom";
import { paths } from "../../../lib/topic";
import Calendar from "../../calendar/Calendar";
import * as S from "./popBrowse.styled";
import { useState } from "react";

function PopBrowse() {
  const { id } = useParams();
  const [selected, setSelected] = useState();

  return (
    <S.PopBrowse>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>Задача № {id}</S.PopBrowseTtl>
              <S.PopBrowseCategoriesTheme>
                <p>Web Design</p>
              </S.PopBrowseCategoriesTheme>
            </S.PopBrowseTopBlock>
            <S.Status>
              <p>Статус</p>
              <S.StatusThemes>
                <S.StatusTheme>
                  <p>Без статуса</p>
                </S.StatusTheme>
                <S.StatusTheme>
                  <p className="_gray">Нужно сделать</p>
                </S.StatusTheme>
                <div className="status__theme _hide">
                  <p>В работе</p>
                </div>
                <S.StatusTheme>
                  <p>Тестирование</p>
                </S.StatusTheme>
                <S.StatusTheme>
                  <p>Готово</p>
                </S.StatusTheme>
              </S.StatusThemes>
            </S.Status>
            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.PopBrowseBlock>
                  <S.PopBrowseLabel>Описание задачи</S.PopBrowseLabel>
                  <S.FormBrowseArea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly=""
                    placeholder="Введите описание задачи..."
                    defaultValue={""}
                  />
                </S.PopBrowseBlock>
              </S.PopBrowseForm>
              <Calendar selected={selected} setSelected={setSelected} />
            </S.PopBrowseWrap>
            <S.PopBrowseBtnBrowse>
        
            </S.PopBrowseBtnBrowse>
            <S.PopBrowseBtnEdit>
              <S.BtnGroup>
                <S.BtnBg>
                  <a>Сохранить</a>
                </S.BtnBg>
                <S.BtnBor>
                  <a href="#">Отменить</a>
                </S.BtnBor>
                <S.BtnBor>
                  <a href="#">Удалить задачу</a>
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
