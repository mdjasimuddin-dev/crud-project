import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ReadById } from "../apiServices/CRUDServices";

const DetailsPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ReadById(id).then((res) => {
      setProducts(res);
    });
  }, []);
  if (!id) return <p>No product data available.</p>;

  const { ProductName, ProductCode, Img, UnitPrice, Qty, TotalPrice } =
    products;

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={Img}
            alt={ProductName}
            className="w-full h-64 object-contain rounded"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">{ProductName}</h2>

          <p className="text-gray-600">
            <span className="font-medium">Product Code:</span> {ProductCode}
          </p>

          <p className="text-gray-600">
            <span className="font-medium">Unit Price:</span> ${UnitPrice}
          </p>

          <p className="text-gray-600">
            <span className="font-medium">Quantity:</span> {Qty}
          </p>

          <p className="text-gray-800 text-lg font-semibold">
            <span>Total Price:</span> ${TotalPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
