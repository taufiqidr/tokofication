import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading";
import { db } from "../../../config/firebaseConfig";
import Product from "./Product";

const Products = () => {
  const productsCollectionRef = collection(db, "products");

  const { data, isLoading, isError, refetch } = useQuery(
    ["product"],
    async () => {
      return await getDocs(productsCollectionRef);
    }
  );
  if (isLoading) return <Loading />;
  if (isError) return <div>Error...</div>;

  const products = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return (
    <div className="flex flex-col">
      <div className="fixed top-0 right-0 m-3">
        <Link to="new">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 sm:py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add Product
          </button>
        </Link>
      </div>
      <div className="flex justify-center">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-600">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product Name
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Stock Qty
              </th>
              <th scope="col" className="py-3 px-6">
                Sold Qty
              </th>
              <th scope="col" className="py-3 px-6 border-l border-gray-400">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                name={product.product_name}
                price={product.price}
                sold={product.sold}
                stock={product.stock}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
