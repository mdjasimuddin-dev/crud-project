import { useEffect, useState } from "react";
import { Delete, Read } from "./../../apiServices/CRUDServices";
import { Link } from "react-router";

const ReadListTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Read().then((result) => {
      setProducts(result);
    });
  }, []);

  const handleDeleteProducts = (id) => {
    Delete(id).then((result) => {
      console.log(result);
    });
  };

  return (
    <div className="overflow-x-auto p-4 md:p-10 flex justify-center">
      <table className="min-w-[600px] md:min-w-full max-w-full bg-white border border-gray-200 rounded shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left py-3 px-3 md:px-4 border-b text-sm md:text-base">
              Product Name
            </th>
            <th className="text-left py-3 px-3 md:px-4 border-b text-sm md:text-base">
              Product Code
            </th>
            <th className="text-left py-3 px-3 md:px-4 border-b text-sm md:text-base">
              Image
            </th>
            <th className="text-left py-3 px-3 md:px-4 border-b text-sm md:text-base">
              Unit Price
            </th>
            <th className="text-left py-3 px-3 md:px-4 border-b text-sm md:text-base">
              Quantity
            </th>
            <th className="text-left py-3 px-3 md:px-4 border-b text-sm md:text-base">
              Total Price
            </th>
            <button className="text-left py-3 px-3 md:px-4 border-b text-sm md:text-base">
              Details
            </button>
            <th className="text-center py-3 px-3 md:px-4 border-b text-sm md:text-base">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {products && products.length > 0 ? (
            products.map((product, idx) => (
              <tr
                key={product.id || idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="py-2 px-3 md:px-4 border-b text-sm md:text-base">
                  {product.ProductName}
                </td>
                <td className="py-2 px-3 md:px-4 border-b text-sm md:text-base">
                  {product.ProductCode}
                </td>
                <td className="py-2 px-3 md:px-4 border-b text-sm md:text-base">
                  {product.Img ? (
                    <img
                      src={product.Img}
                      alt={product.name}
                      className="w-12 h-12 md:w-16 md:h-16 object-cover rounded"
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td className="py-2 px-3 md:px-4 border-b text-sm md:text-base">
                  {product.UnitPrice}
                </td>
                <td className="py-2 px-3 md:px-4 border-b text-sm md:text-base">
                  {product.Qty}
                </td>
                <td className="py-2 px-3 md:px-4 border-b text-sm md:text-base">
                  {product.TotalPrice}
                </td>
                <td className="py-2 px-3 md:px-4 border-b text-sm md:text-base">
                  <Link
                    to={`/viewDetails/${product._id}`}
                    // onClick={() => viewDetails(product)}
                    className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 md:px-3 md:py-1 rounded text-xs md:text-sm"
                  >
                    View
                  </Link>
                </td>
                <td className="py-2 px-3 md:px-4 border-b text-center space-x-1 md:space-x-2">
                  <Link
                    to={`/update/${product._id}`}
                    // onClick={() => onUpdate(product)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 md:px-3 md:py-1 rounded text-xs md:text-sm"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDeleteProducts(product._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 md:px-3 md:py-1 rounded text-xs md:text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="7"
                className="text-center py-6 text-gray-500 text-sm md:text-base"
              >
                No Products Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReadListTable;
