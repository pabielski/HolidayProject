type Itemtype = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};
const initialItems: Itemtype[] = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function Item({ item }: { item: Itemtype }) {
  return <li>{item.description}</li>;
}
export default function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}
