const Move = () => {
  const move = () => {
    console.log("Move");
  };
  return (
    <>
      <h1 onMouseMove={move}>Hello</h1>
    </>
  );
};

export default Move;
