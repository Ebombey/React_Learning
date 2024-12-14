import ComponentB from "./ComponentB.tsx";

interface ComponentAProps {
  name: string;
}

const ComponentA = ({ name }: ComponentAProps) => {
  return (
    <div>
      <h1>Component A: Name given to Component B</h1>
      <ComponentB name={name} />
    </div>
  );
};

export default ComponentA;
