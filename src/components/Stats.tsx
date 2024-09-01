import { ItemType } from "../../type";

export default function Stats({ items }: { items: ItemType[] }) {
  if (!items.length)
    return (
      <p className="stats">
        {" "}
        <em>Brak itemów</em>
      </p>
    );
  const liczbaItemków: number = items.length;
  const spakowanych: number = items.filter((item) => item.packed).length;
  const procentSpakowania: number = Math.round(
    liczbaItemków > 0 ? (spakowanych / liczbaItemków) * 100 : 0
  );

  return (
    <footer className="stats">
      <em>
        {procentSpakowania === 100
          ? "Juz wszystko jest spakowane! ✈️🛩️🛫🛬🚁"
          : `Masz ${liczbaItemków} itemów na liść, z czego ${spakowanych} zostało spakowanych. Spakowanych jest ${spakowanych}, a to oznacza, że jestes spakowany na ${procentSpakowania}%.`}
      </em>
    </footer>
  );
}
