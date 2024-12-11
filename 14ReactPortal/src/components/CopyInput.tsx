import { useState } from "react";
import PopupContent from "./PopupContent.tsx";

const CopyInput = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>
      <PopupContent copied={copied} />
    </div>
  );
};

export default CopyInput;
