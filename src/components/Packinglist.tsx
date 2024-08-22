export type Itemtype = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};
const initialItems: Itemtype[] = [
  { id: 1, description: "Paszport", quantity: 1, packed: false },
  { id: 2, description: "skarpetki", quantity: 12, packed: true },
  { id: 3, description: "ładowarka", quantity: 1, packed: false },
];

function Item({ item }: { item: Itemtype }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
export default function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
