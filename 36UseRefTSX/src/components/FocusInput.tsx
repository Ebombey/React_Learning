import { useRef } from "react";

const FocusInput = () => {
  const input = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    input.current?.focus();
  };
  return (
    <div>
      <input type="text" ref={input} placeholder="Click the Button" />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default FocusInput;
