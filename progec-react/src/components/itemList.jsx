import ItemList from './ItemList1'; // Assicurati che il percorso sia corretto

function ItemList1() {
  const myItems = ["banana", "fragola", "uva"];

  return (
    <div>
      <h1>La mia lista</h1>
      <ItemList items={myItems} />
    </div>
  );
}
export default App;