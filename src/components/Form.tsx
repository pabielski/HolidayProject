import { useState } from "react";
import { Itemtype } from "../components/Packinglist";

export default function Form() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!description) {
      alert("Dodaj itemasek jakiś plz");
      return;
    }
    const newItem: Itemtype = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);
    setDescription("");
    setQuantity(1);
  }
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Co tam do walizy wariacie?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
