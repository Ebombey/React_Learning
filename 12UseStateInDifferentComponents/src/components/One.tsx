interface OneProps {
  count: number;
  onClickHandler: () => void;
}

const One = ({ count, onClickHandler }: OneProps) => {
  const handleClick = () => {
    onClickHandler();
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default One;
