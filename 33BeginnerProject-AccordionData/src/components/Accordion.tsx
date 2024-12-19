import { useState } from "react";

type AccordionProps = {
  title: string;
  content: string;
};

const Accordion = ({ title, content }: AccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="m-5 p-5 bg-[#494949]" key={Math.random()}>
      <div
        className="flex justify-between w-[40rem]"
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <p className="text-[1.5rem] cursor-pointer">{isActive ? "-" : "+"}</p>
      </div>

      <div>
        {isActive && (
          <p className="w-[30rem] px-5 py-0 leading-[1.3]">{content}</p>
        )}
      </div>
    </section>
  );
};

export default Accordion;
