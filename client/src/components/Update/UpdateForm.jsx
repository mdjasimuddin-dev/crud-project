import { useNavigate } from "react-router";
import { Update } from "../../apiServices/CRUDServices";
import { useForm } from "react-hook-form";

const UpdateForm = ({ product }) => {
  const { _id, ProductName, ProductCode, Img, UnitPrice, Qty, TotalPrice } =
    product.data;

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const updateDoc = {
      ProductName: data.name,
      ProductCode: data.code,
      Img: data.image,
      UnitPrice: data.unitPrice,
      Qty: data.qty,
      TotalPrice: data.totalPrice,
    };

    Update(
      _id,
      updateDoc.ProductName,
      updateDoc.ProductCode,
      updateDoc.Img,
      updateDoc.UnitPrice,
      updateDoc.Qty,
      updateDoc.TotalPrice
    ).then((result) => {
      console.log(result);

      navigate("/");
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 p-4 md:p-10">
      <div className="bg-white w-full max-w-3xl p-6 md:p-10 rounded-lg">
        <div className="text-center space-y-2 mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Product Update Form
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            maxime!
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* product name */}
            <div className="flex flex-col">
              <label className="label mb-1 font-medium">Product Name</label>
              <input
                type="text"
                defaultValue={ProductName}
                {...register("name", { required: "Product Name is Required" })}
                className="input w-full p-2 border rounded"
                placeholder="Product Name"
              />

              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>

            {/* product code */}
            <div className="flex flex-col">
              <label className="label mb-1 font-medium">Product Code</label>
              <input
                type="text"
                defaultValue={ProductCode}
                {...register("code", { required: "Product Code is Required" })}
                className="input w-full p-2 border rounded"
                placeholder="Product Code"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-6">
            {/* product image */}
            <div className="flex flex-col">
              <label className="label mb-1 font-medium">Product Image</label>
              <input
                type="text"
                defaultValue={Img}
                {...register("image", {
                  required: "Product Image is Required",
                })}
                className="input w-full p-2 border rounded"
                placeholder="Product Image URL"
              />
            </div>

            {/* unit price */}
            <div className="flex flex-col">
              <label className="label mb-1 font-medium">Unit Price</label>
              <input
                type="text"
                defaultValue={UnitPrice}
                {...register("unitPrice", {
                  required: "Product Unit Price is Required",
                })}
                className="input w-full p-2 border rounded"
                placeholder="Product unit price"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-6">
            {/* product quantity */}
            <div className="flex flex-col">
              <label className="label mb-1 font-medium">Product Quantity</label>
              <input
                type="number"
                defaultValue={Qty}
                {...register("qty", {
                  required: "Product Quantity is Required",
                })}
                className="input w-full p-2 border rounded"
                placeholder="Product Quantity"
              />
            </div>

            {/* total price */}
            <div className="flex flex-col">
              <label className="label mb-1 font-medium">Total Price</label>
              <input
                type="number"
                defaultValue={TotalPrice}
                {...register("totalPrice", {
                  required: "Product Total Price is Required",
                })}
                className="input w-full p-2 border rounded"
                placeholder="Total Price"
              />
            </div>
          </div>

          <button className="bg-green-600 hover:bg-green-700 transition-colors text-white p-3 w-full rounded mt-8 font-semibold">
            Submit Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
