import statusList from "../../utils/statusList";
import Column from "../column/Column";
import cardList from "../../utils/cardList";

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusList.map(status => (
              <Column
                key={status}
                status={status}
                cards={cardList.filter(card => card.status.toLowerCase() === status.toLowerCase())}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;