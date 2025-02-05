import { useGetAllProductsQuery } from "../app/service/dummyData.ts";

const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery();

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
      {data?.products.map((p) => (
        <>
          <h1 key={p.id} className="text-3xl">
            {p.title}
          </h1>
          <p>{p.description}</p>
        </>
      ))}
    </div>
  );
};

export default AllProducts;
