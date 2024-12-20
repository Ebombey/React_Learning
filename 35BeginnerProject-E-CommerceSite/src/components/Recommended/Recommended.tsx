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
          <button className="btns">All Products</button>
          <button className="btns">Nike</button>
          <button className="btns">Adidas</button>
          <button className="btns">Puma</button>
          <button className="btns">Vans</button>
        </div>
      </div>
    </>
  );
};

export default Recommended;
