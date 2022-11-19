import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import Loading from "../../../components/Loading";
import { db } from "../../../config/firebaseConfig";
import Product from "./Product";

const ProductTable = () => {
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
  );
};

export default ProductTable;
