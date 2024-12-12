import { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("Called useEffect");
  });
  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export default BasicEffect;
