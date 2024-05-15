import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import { ru } from "date-fns/locale/ru";
import { DayPicker } from "react-day-picker";
import PropTypes from 'prop-types';


function Calendar({selected, setSelected}) {
  
  let footer = <p>Срок исполнения</p>;
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

Calendar.propTypes = {
  selected: PropTypes.instanceOf(Date),
  setSelected: PropTypes.func,
};

export default Calendar;
