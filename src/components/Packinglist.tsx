import { ItemType } from "../../type";

function Item({
  item,
  onDeleteItem,
  onCheckboxChange,
}: {
  item: ItemType;
  onDeleteItem: (id: number) => void;
  onCheckboxChange: (id: number) => void;
}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => {
          onCheckboxChange(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
export default function PackingList({
  items,
  onDeleteItem,
  onCheckboxChange,
}: {
  items: ItemType[];
  onDeleteItem: (id: number) => void;
  onCheckboxChange: (id: number) => void;
}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onCheckboxChange={onCheckboxChange}
          />
        ))}
      </ul>
    </div>
  );
}
