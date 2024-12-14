import { Data, DataOne } from "../App.tsx";

const ComponentA = () => {
  return (
    <Data.Consumer>
      {(name) => (
        <div>
          <h1>{name}</h1>
          <DataOne.Consumer>{(age) => <h1>{age}</h1>}</DataOne.Consumer>
        </div>
      )}
    </Data.Consumer>
  );
};

export default ComponentA;
