interface ComponentCProps {
  name: string;
}

const ComponentC = ({ name }: ComponentCProps) => {
  return (
    <div>
      <h1>Component C: Name used in Component C</h1>
      <h1>Component C: {name}</h1>
    </div>
  );
};

export default ComponentC;
