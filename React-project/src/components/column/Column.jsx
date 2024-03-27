import Card from "../card/Card";
import PropTypes from "prop-types";

function Column({status}) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{status}</p>
      </div>
      <div className="cards">
        <Card theme="Web design" content="Название задачи" date="30.10.23" />
      </div>
    </div>
  );
}

Column.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Column;
  