import Buttons from "../Buttons.tsx";
import "./Recommended.css";

type RecommendedProps = {
  children?: React.ReactNode;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Recommended = ({ handleClick }: RecommendedProps) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Buttons handleClick={handleClick} value="" title="All Products" />
          <Buttons handleClick={handleClick} value="nike" title="Nike" />
          <Buttons handleClick={handleClick} value="adidas" title="Adidas" />
          <Buttons handleClick={handleClick} value="puma" title="Puma" />
          <Buttons handleClick={handleClick} value="vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
