import Logo from "./components/logo";
import "./App.css";
import Form from "./components/Form";
import PackingList from "./components/Packinglist";
import Stats from "./components/Stats";
import { useState } from "react";
import { ItemType } from "../type";

function App() {
  const [items, setItems] = useState<ItemType[]>([]);

  function handleCheckboxChange(id: number) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleAddItems(item: ItemType) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id: number) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onCheckboxChange={handleCheckboxChange}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
