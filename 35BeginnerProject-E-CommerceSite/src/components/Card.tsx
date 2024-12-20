import { BsFillBagHeartFill } from "react-icons/bs";

type CardProps = {
  img: string;
  title: string;
  star: JSX.Element;
  reviews: string;
  newPrice: string;
  prevPrice: string;
  company?: string;
  color?: string;
  category?: string;
};

const Card = ({
  img,
  title,
  star,
  reviews,
  newPrice,
  prevPrice,
}: CardProps) => {
  return (
    <>
      <section className="card">
        <img src={img} alt="Shoe" className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>${prevPrice}</del> ${newPrice}
            </div>
            <div className="bag">
              <BsFillBagHeartFill />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
