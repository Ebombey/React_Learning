import Input from "../../Input.tsx";
import "./Price.css";

type PriceProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Price = ({ handleChange }: PriceProps) => {
  return (
    <div className="margin-l">
      <h2 className="sidebar-title price-title">Price</h2>

      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value={""} name="text2" />
        <span className="checkmark"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value="50"
        title="$0 - $50"
        name="text2"
      />
      <Input
        handleChange={handleChange}
        value="100"
        title="$50 - $100"
        name="text2"
      />
      <Input
        handleChange={handleChange}
        value="150"
        title="$100 - $150"
        name="text2"
      />
      <Input
        handleChange={handleChange}
        value="200"
        title="Over $150"
        name="text2"
      />
    </div>
  );
};

export default Price;
