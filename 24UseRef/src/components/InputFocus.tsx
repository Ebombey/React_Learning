import { useRef } from "react";

const InputFocus = () => {
  const inputElement = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputElement.current?.focus();
  };
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default InputFocus;
