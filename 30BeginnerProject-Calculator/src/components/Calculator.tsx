import { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  const clear = () => {
    setInputValue("");
  };

  const display = (value: string) => {
    setInputValue(inputValue + value);
  };

  const calculate = () => {
    setInputValue(eval(inputValue));
  };

  return (
    <form className="relative grid" name="calc">
      <input
        type="text"
        value={inputValue}
        className="col-span-4 h-[100px] text-center border-none outline-none p-[10px] text-[18px]"
      />

      <span
        className="col-span-2 w-[120px] bg-[#ffa31a] text-white grid  h-[60px]  place-items-center border-[1px] border-solid border-customFontColor2"
        onClick={() => clear()}
      >
        C
      </span>

      <span
        className="grid w-[60px] h-[60px] bg-[#292929] place-items-center border-[1px] border-solid border-customFontColor2 text-white"
        onClick={() => display("/")}
      >
        /
      </span>
      <span
        className="grid w-[60px] h-[60px] bg-[#292929] place-items-center border-[1px] border-solid border-customFontColor2 text-white"
        onClick={() => display("*")}
      >
        *
      </span>
      <span
        className="grid w-[60px] h-[60px] bg-[#292929] place-items-center border-[1px] border-solid border-customFontColor2 text-white"
        onClick={() => display("7")}
      >
        7
      </span>
      <span
        className="grid w-[60px] h-[60px] bg-[#292929] place-items-center border-[1px] border-solid border-customFontColor2 text-white"
        onClick={() => display("8")}
      >
        8
      </span>
      <span
        className="grid w-[60px] h-[60px] bg-[#292929] place-items-center border-[1px] border-solid border-customFontColor2 text-white"
        onClick={() => display("0")}
      >
        0
      </span>
      <span
        className="grid w-[60px] h-[60px] bg-[#292929] place-items-center border-[1px] border-solid border-customFontColor2 text-white"
        onClick={() => display("-")}
      >
        -
      </span>
      <span
        className="grid w-[60px] h-[60px] bg-[#292929] place-items-center border-[1px] border-solid border-customFontColor2 text-white"
        onClick={() => display("4")}
      >
        4
      </span>
      <span
        className="grid w-[60px] h-[60px] bg-[#292929] place-items-center border-[1px] border-solid border-customFontColor2 text-white"
        onClick={() => display("5")}
      >
        5
      </span>
      <span
        className="grid w-[60px] h-[60px] bg-[#292929] place-items-center border-[1px] border-solid border-customFontColor2 text-white"
        onClick={() => display("6")}
      >
        6
      </span>
      <span
        className="row-span-2 h-[120px] grid w-[60px] bg-[#292929] place-items-center border-[1px] border-solid border-customFontColor2 text-white"
        onClick={() => display("+")}
      >
        +
      </span>

      <span
        className="grid w-[60px] h-[60px] bg-[#292929] place-items-center border-[1px] border-solid border-customFontColor2 text-white"
        onClick={() => display("1")}
      >
        1
      </span>
      <span
        className="grid w-[60px] h-[60px] bg-[#292929] place-items-center border-[1px] border-solid border-customFontColor2 text-white"
        onClick={() => display("2")}
      >
        2
      </span>
      <span
        className="grid w-[60px] h-[60px] bg-[#292929] place-items-center border-[1px] border-solid border-customFontColor2 text-white"
        onClick={() => display("3")}
      >
        3
      </span>
      <span
        className="grid w-[60px] h-[60px] bg-[#292929] place-items-center border-[1px] border-solid border-customFontColor2 text-white"
        onClick={() => display("0")}
      >
        0
      </span>
      <span
        className="grid w-[60px] h-[60px] bg-[#292929] place-items-center border-[1px] border-solid border-customFontColor2 text-white"
        onClick={() => display("0")}
      >
        00
      </span>
      <span
        className="grid w-[60px] h-[60px] bg-[#292929] place-items-center border-[1px] border-solid border-customFontColor2 text-white"
        onClick={() => display(".")}
      >
        .
      </span>
      <span
        className="bg-[#ffa31a] grid w-[60px] h-[60px] place-items-center border-[1px] border-solid border-customFontColor2 text-white"
        onClick={() => calculate()}
      >
        =
      </span>
    </form>
  );
};

export default Calculator;
