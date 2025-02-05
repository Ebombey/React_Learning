import { useDeleteProductMutation } from "../app/service/dummyData.ts";

const DeleteProduct = ({ productId }: { productId: number }) => {
  const [deleteProduct, { data, isError, isLoading }] =
    useDeleteProductMutation();

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

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(productId);
    } catch (error) {
      console.error("Error deleting a product: ", error);
    }
  };

  return (
    <div>
      <h1>{data?.title ? `${data.title} successfully deleted` : ""}</h1>
      <button onClick={handleDeleteProduct} disabled={isLoading}>
        Delete Product
      </button>
    </div>
  );
};

export default DeleteProduct;
