import { useAddNewProductMutation } from "../app/service/dummyData.ts";

const AddNewProduct = () => {
  const [addNewProduct, { data, isError, isLoading }] =
    useAddNewProductMutation();

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

  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "Amazing T-shirt",
        description: "An amazing in affordable price",
      };

      await addNewProduct(newProductData);
    } catch (error) {
      console.error("Error adding new product: ", error);
    }
  };

  return (
    <div>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>

      <button onClick={handleAddProduct} disabled={isLoading}>
        Add new product
      </button>
    </div>
  );
};

export default AddNewProduct;
