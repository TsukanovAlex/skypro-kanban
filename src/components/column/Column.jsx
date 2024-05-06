import Card from "../card/Card";
import PropTypes from "prop-types";
import * as S from "./column.styled";

function Column({ status, cards }) {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{status}</p>
      </S.ColumnTitle>
      <S.Cards>
        {cards.map((card) => (
          <Card key={String(card._id)} card={card} />
        ))}
      </S.Cards>
    </S.MainColumn>
  );
}

Column.propTypes = {
  status: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
};

export default Column;
