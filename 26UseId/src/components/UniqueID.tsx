import { useId } from "react";

const UniqueID = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="text" id={`${id}`} />

      <br />

      <label htmlFor={`${id}-password`}>Password</label>
      <input type="text" id={`${id}`} />
    </div>
  );
};

export default UniqueID;
