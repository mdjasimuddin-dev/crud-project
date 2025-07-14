import { useForm } from "react-hook-form";
import { Create } from "./../../apiServices/CRUDServices";
import { useNavigate } from "react-router";

const CreateForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);

    const saveData = {
      Product_Name: data.name,
      Product_Code: data.code,
      Product_Image: data.image,
      Unit_Price: data.unitPrice,
      Qty: data.qty,
      totalPrice: data.totalPrice,
    };

    try {
      let result = await Create(
        saveData.Product_Name,
        saveData.Product_Code,
        saveData.Product_Image,
        saveData.Unit_Price,
        saveData.Qty,
        saveData.totalPrice
      );

      console.log(result);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 p-4 md:p-10">
      <div className="bg-white w-full max-w-3xl p-6 md:p-10 rounded-lg">
        <div className="text-center space-y-2 mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Product Create Form
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
                {...register("name", { required: "Product name is required!" })}
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
                {...register("code", {
                  required: "Product Code is required !",
                })}
                className="input w-full p-2 border rounded"
                placeholder="Product Code"
              />

              {errors.code && (
                <span className="text-red-500">{errors.code.message}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-6">
            {/* product image */}
            <div className="flex flex-col">
              <label className="label mb-1 font-medium">Product Image</label>
              <input
                type="text"
                {...register("image", {
                  required: "Product image is required !",
                })}
                className="input w-full p-2 border rounded"
                placeholder="Product Image URL"
              />

              {errors.image && (
                <span className="text-red-500">{errors.image.message}</span>
              )}
            </div>

            {/* unit price */}
            <div className="flex flex-col">
              <label className="label mb-1 font-medium">Unit Price</label>
              <input
                type="number"
                {...register("unitPrice", {
                  required: "Product unit price is required !",
                })}
                className="input w-full p-2 border rounded"
                placeholder="Product unit price"
              />

              {errors.unitPrice && (
                <span className="text-red-500">{errors.unitPrice.message}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-6">
            {/* product quantity */}
            <div className="flex flex-col">
              <label className="label mb-1 font-medium">Product Quantity</label>
              <input
                type="number"
                {...register("qty", {
                  required: "Product quantity is required !",
                })}
                className="input w-full p-2 border rounded"
                placeholder="Product Quantity"
              />

              {errors.qty && (
                <span className="text-red-500">{errors.qty.message}</span>
              )}
            </div>

            {/* total price */}
            <div className="flex flex-col">
              <label className="label mb-1 font-medium">Total Price</label>
              <input
                type="number"
                {...register("totalPrice", {
                  required: "Product total price is required !",
                })}
                className="input w-full p-2 border rounded"
                placeholder="Total Price"
              />

              {errors.totalPrice && (
                <span className="text-red-500">
                  {errors.totalPrice.message}
                </span>
              )}
            </div>
          </div>

          <button className="bg-green-600 hover:bg-green-700 transition-colors text-white p-3 w-full rounded mt-8 font-semibold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
