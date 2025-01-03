type CardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const Card = ({ title, description, image, link }: CardProps) => {
  return (
    <div className="max-w-sm mx-auto m-[1rem] bg-[#1a1c1e] rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="object-cover w-full h-48" />

      <div className="p-6">
        <h2 className="h-2 mb-6 text-2xl font-bold">{title}</h2>
        <p className="mb-4 text-gray-700">{description}</p>
        <a
          href={link}
          className="inline-block px-4 py-2 font-semibold text-black transition duration-200 bg-white rounded-lg shadow hover:bg-gray-600 hover:text-white"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
