const Button = () => {
  // Alternate approach
  // const click = () => console.log("click");
  return (
    <>
      <button onClick={() => console.log("click")}>Click</button>
    </>
  );
};

export default Button;
