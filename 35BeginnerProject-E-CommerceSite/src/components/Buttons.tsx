type ButtonsProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value: string;
  title: string;
};

const Buttons = ({ handleClick, value, title }: ButtonsProps) => {
  return (
    <button onClick={handleClick} value={value} className="btns">
      {title}
    </button>
  );
};

export default Buttons;
