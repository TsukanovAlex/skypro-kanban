
import Card from "../card/Card";
import PropTypes from "prop-types";

function Column({ status, cards }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{status}</p>
      </div>
      <div className="cards">
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

Column.propTypes = {
  status: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired
};

export default Column;
