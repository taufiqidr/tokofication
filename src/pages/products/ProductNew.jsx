import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopBar from "../../../components/TopBar";
import { db } from "../../../config/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
const ProductNew = () => {
  const [product_name, setProduct_name] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [sold, setSold] = useState("");
  const productsCollectionRef = collection(db, "products");

  const navigate = useNavigate();
  const CreateProduct = async () => {
    let res = await addDoc(productsCollectionRef, {
      product_name: product_name,
      stock: Number(stock),
      price: Number(price),
      sold: Number(sold),
    });
    if (res) navigate("/product");
  };

  let disabled = !Boolean(product_name && price && stock && sold);
  return (
    <div className="max-w-full">
      <div className="ml-11 mr-5 mt-5">
        <div>
          <div className="mb-6">
            <label
              htmlFor="product_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Product Name
            </label>
            <input
              type="text"
              id="product_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={product_name}
              onChange={(e) => setProduct_name(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="stock"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Stock
            </label>
            <input
              type="number"
              id="stock"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="sold"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Product Sold
            </label>
            <input
              type="number"
              id="sold"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={sold}
              onChange={(e) => setSold(e.target.value)}
            />
          </div>

          <div className="">
            <button
              type="submit"
              onClick={CreateProduct}
              disabled={disabled}
              className={`text-white  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   
              ${
                disabled
                  ? "dark:bg-slate-600 bg-slate-700 dark:hover:bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800"
                  : "dark:bg-blue-600 bg-blue-700 dark:hover:bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              }`}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductNew;
