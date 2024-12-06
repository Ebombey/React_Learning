interface PersonProps {
  name: string;
  age: number;
}

// Destructuring props approach
const Person = ({ name, age }: PersonProps) => {
  return (
    <>
      <h1>My name is {name}</h1>
      <h2>My age is {age}</h2>
    </>
  );
};

export default Person;
