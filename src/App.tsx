import Logo from "./components/logo";
import "./App.css";
import Form from "./components/Form";
import PackingList from "./components/Packinglist";
import Stats from "./components/Stats";
import { useState } from "react";
import { ItemType } from "../type";

function App() {
  const [items, setItems] = useState<ItemType[]>([]);
  function handleAddItems(item: ItemType) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
