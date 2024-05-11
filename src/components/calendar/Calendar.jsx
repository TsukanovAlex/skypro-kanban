import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import { ru } from "date-fns/locale/ru";
import { DayPicker } from "react-day-picker";
import { useState } from "react";

function Calendar() {
  const [selected, setSelected] = useState();
  let footer = <p>Выберете срок исполнения</p>;
  if (selected) {
    footer = <p>Вы выбрали {format(selected, "PP", { locale: ru })}</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    ></DayPicker>
  );
}

export default Calendar;
