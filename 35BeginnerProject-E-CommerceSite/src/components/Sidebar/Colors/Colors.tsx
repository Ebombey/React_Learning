import Input from "../../Input.tsx";
import "./Colors.css";

type ColorsProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Colors = ({ handleChange }: ColorsProps) => {
  return (
    <div className="sidebar-colors-container">
      <h2 className="sidebar-title">Colors</h2>

      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value={""} name="text1" />
        <span className="checkmark all"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value={"black"}
        title="Black"
        name="text1"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value={"blue"}
        title="Blue"
        name="text1"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value={"red"}
        title="Red"
        name="text1"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value={"green"}
        title="Green"
        name="text1"
        color="green"
      />

      <label className="sidebar-label-container">
        <input
          onChange={handleChange}
          type="radio"
          value={"white"}
          name="text1"
        />
        <span
          className="checkmark"
          style={{
            backgroundColor: "white",
            border: "2px solid black",
            color: "black",
          }}
        ></span>
        White
      </label>
    </div>
  );
};

export default Colors;
