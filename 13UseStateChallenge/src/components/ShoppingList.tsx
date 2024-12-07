import React, { useState } from "react";

interface ItemType {
  name: string;
  quantity: number;
}

const ShoppingList = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);

  function handleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name.trim() || quantity) {
      setItems([...items, { name, quantity }]);
      setName("");
      setQuantity(0);
    }
  }

  return (
    <>
      <form action="submit" onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Name of Item"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.name}>
            Item: {item.name} Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShoppingList;
