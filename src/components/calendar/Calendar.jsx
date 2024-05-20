import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import { ru } from "date-fns/locale/ru";
import { DayPicker } from "react-day-picker";
import PropTypes from "prop-types";

function Calendar({ selected, setSelected, isEdited }) {
  let footer = <p>Срок исполнения</p>;
  if (selected) {
    footer = <p>Вы выбрали {format(selected, "PP", { locale: ru })}</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={(date) => isEdited && setSelected(date)}
      footer={footer}
      disabled={!isEdited}
    ></DayPicker>
  );
}

Calendar.propTypes = {
  selected: PropTypes.instanceOf(Date),
  setSelected: PropTypes.func,
  isEdited: PropTypes.any
};

export default Calendar;
