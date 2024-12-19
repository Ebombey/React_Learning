import React from "react";
import Input from "../../Input.tsx";
import "./Category.css";

type CategoryProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Category = ({ handleChange }: CategoryProps) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label htmlFor="" className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value={""} name="test" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />

        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />

        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />

        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
