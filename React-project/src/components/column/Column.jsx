import Card from "../card/Card";
import PropTypes from "prop-types";

function Column(props) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{props.title}</p>
      </div>
      <div className="cards">
        <Card theme="Web design" content="Название задачи" date="30.10.23" />
      </div>
    </div>
  );
}

Column.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Column;
