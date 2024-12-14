import ComponentC from "./ComponentC.tsx";

interface ComponentBProps {
  name: string;
}

const ComponentB = ({ name }: ComponentBProps) => {
  return (
    <div>
      <h1>Component B: Name given to Component C</h1>
      <ComponentC name={name} />
    </div>
  );
};

export default ComponentB;
