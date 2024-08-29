import { ItemType } from "../../type";

function Item({
  item,
  onDeleteItem,
}: {
  item: ItemType;
  onDeleteItem: (id: number) => void;
}) {
  return (
    <li>
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
}: {
  items: ItemType[];
  onDeleteItem: (id: number) => void;
}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
}
