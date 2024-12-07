interface TwoProps {
  count: number;
  onClickHandler: () => void;
}

const Two = ({ count, onClickHandler }: TwoProps) => {
  const handleClick = () => {
    onClickHandler();
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Decrement</button>
    </div>
  );
};

export default Two;
