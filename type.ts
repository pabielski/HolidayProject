export type ItemType = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};
export type FormProps = {
  onAddItems: (item: ItemType) => void;
};
