import Calendar from "../../calendar/Calendar";
import * as S from "./popNewCard";
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
              <S.Calendar>
                <Calendar />
                {/* <S.SubTtl>
                  <S.CalendarTtl>Даты</S.CalendarTtl>
                </S.SubTtl>

                <S.CalendarBlock>
                  <S.CalendarNav>
                    <S.CalendarMonth>Сентябрь 2023</S.CalendarMonth>
                    <S.NavActions>
                      <S.NavAction data-action="prev">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={6}
                          height={11}
                          viewBox="0 0 6 11"
                        >
                          <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                        </svg>
                      </S.NavAction>
                      <S.NavAction data-action="next">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={6}
                          height={11}
                          viewBox="0 0 6 11"
                        >
                          <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                        </svg>
                      </S.NavAction>
                    </S.NavActions>
                  </S.CalendarNav>
                  <S.calendarContent>
                    <S.CalendarDaysNames>
                      <S.CalendarDayName>пн</S.CalendarDayName>
                      <S.CalendarDayName>вт</S.CalendarDayName>
                      <S.CalendarDayName>ср</S.CalendarDayName>
                      <S.CalendarDayName>чт</S.CalendarDayName>
                      <S.CalendarDayName>пт</S.CalendarDayName>
                      <S.CalendarDayName>сб</S.CalendarDayName>
                      <S.CalendarDayName>вс</S.CalendarDayName>
                    </S.CalendarDaysNames>
                    <div className="calendar__cells">
                      <S.CalendarCell>28</S.CalendarCell>
                      <S.CalendarCell>29</S.CalendarCell>
                      <S.CalendarCell>30</S.CalendarCell>
                      <S.CalendarCell>31</S.CalendarCell>
                      <S.CalendarCell>1</S.CalendarCell>
                      <S.CalendarCell>2</S.CalendarCell>
                      <S.CalendarCell>3</S.CalendarCell>
                      <S.CalendarCell>4</S.CalendarCell>
                      <S.CalendarCell>5</S.CalendarCell>
                      <S.CalendarCell>6</S.CalendarCell>
                      <S.CalendarCell>7</S.CalendarCell>
                      <S.CalendarCell>8</S.CalendarCell>
                      <S.CalendarCell>9</S.CalendarCell>
                      <S.CalendarCell>10</S.CalendarCell>
                      <S.CalendarCell>11</S.CalendarCell>
                      <S.CalendarCell>12</S.CalendarCell>
                      <S.CalendarCell>13</S.CalendarCell>
                      <S.CalendarCell>14</S.CalendarCell>
                      <S.CalendarCell>15</S.CalendarCell>
                      <S.CalendarCell>16</S.CalendarCell>
                      <S.CalendarCell>17</S.CalendarCell>
                      <S.CalendarCell>18</S.CalendarCell>
                      <S.CalendarCell>19</S.CalendarCell>
                      <S.CalendarCell>20</S.CalendarCell>
                      <S.CalendarCell>21</S.CalendarCell>
                      <S.CalendarCell>22</S.CalendarCell>
                      <S.CalendarCell>23</S.CalendarCell>
                      <S.CalendarCell>24</S.CalendarCell>
                      <S.CalendarCell>25</S.CalendarCell>
                      <S.CalendarCell>26</S.CalendarCell>
                      <S.CalendarCell>27</S.CalendarCell>
                      <S.CalendarCell>28</S.CalendarCell>
                      <S.CalendarCell>29</S.CalendarCell>
                      <S.CalendarCell>30</S.CalendarCell>
                      <S.CalendarCell>1</S.CalendarCell>
                    </div>
                  </S.calendarContent>
                  <input
                    type="hidden"
                    id="datepick_value"
                    defaultValue="08.09.2023"
                  />
                  <S.CalendarPeriod>
                    <S.CalendarP>
                      Выберите срок исполнения <span className="date-control" />
                      .
                    </S.CalendarP>
                  </S.CalendarPeriod>
                </S.CalendarBlock> */}
              </S.Calendar>
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
