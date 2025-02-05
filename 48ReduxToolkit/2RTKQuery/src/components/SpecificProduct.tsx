import { useGetProductByIdQuery } from "../app/service/dummyData.ts";

const SpecificProduct = () => {
  const { data, isError, isLoading } = useGetProductByIdQuery(2);
  console.log(data);

  if (isError) {
    return <h1>An error occurred</h1>;
  }

  if (isLoading) {
    return (
      <h1 className="w-full h-screen text-4xl flex items-center justify-center">
        Loading...
      </h1>
    );
  }
  return (
    <div>
      <h1 className="text-2xl">{data?.title}</h1>
      <p className="text-lg">{data?.brand}</p>
    </div>
  );
};

export default SpecificProduct;
