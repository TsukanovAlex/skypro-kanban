import statusList from "../../utils/statusList";
import Column from "../column/Column";
import PropTypes from 'prop-types';

function Main({taskList}) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusList.map(status => (
              <Column
                key={status}
                status={status}
                cards={taskList.filter(card => card.status.toLowerCase() === status.toLowerCase())}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

Main.propTypes = {
  taskList: PropTypes.array.isRequired
};

export default Main;