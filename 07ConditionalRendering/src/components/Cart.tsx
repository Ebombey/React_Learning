const Cart = () => {
  const items = ["Wireless Earbuds", "TWS", "Speakers", "Headphones", "Lead"];

  return (
    <>
      <h1>Card</h1>
      {items.length > 0 && <h2>You have {items.length} items in you cart.</h2>}

      {items.length === 0 && <h2>Cart is empty</h2>}

      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
