import statusList from "../../utils/statusList";
import Column from "../column/Column";



function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusList.map((status) => (
              <Column status={status} key={status} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
