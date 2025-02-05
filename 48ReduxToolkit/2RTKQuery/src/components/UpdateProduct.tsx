import { useUpdateProductMutation } from "../app/service/dummyData.ts";

const UpdateProduct = () => {
  const [updateProduct, { data, isError, isLoading }] =
    useUpdateProductMutation();

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

  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        title: "Title Updated",
      };
      await updateProduct({ id: 2, updatedProduct: updatedProductData });
    } catch (error) {
      console.error("Error updating a product: ", error);
    }
  };

  return (
    <div>
      <h1>{data?.title}</h1>

      <button onClick={handleUpdateProduct} disabled={isLoading}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
