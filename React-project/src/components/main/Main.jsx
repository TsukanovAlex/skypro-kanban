import Column from "../column/Column"

function Main() {
    return (
        <main className="main">
    <div className="container">
      <div className="main__block">
        <div className="main__content">
        <Column title="БЕЗ СТАТУСА" />
        <Column title="НУЖНО СДЕЛАТЬ" />
        <Column title="В РАБОТЕ" />
        <Column title="ТЕСТРИОВНИЕ" />
        <Column title="ГОТОВО" />
        </div>
      </div>
    </div>
  </main>
    )
}

export default Main