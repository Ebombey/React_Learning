import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  return <>{props.children}</>;
};

export default Card;
