import { useQuery } from "@tanstack/react-query";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import TopBar from "../../../components/TopBar";
import { db } from "../../../config/firebaseConfig";
import ProductDeleteModal from "./ProductDeleteModal";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState("");
  const [isLoading, setIsLoading] = useState("");

  useEffect(() => {
    getSingleProduct();
  }, [id]);
  const getSingleProduct = async () => {
    const singleNote = doc(db, "products", id);
    const data = getDoc(singleNote);
    const product = (await data.finally()).data();
    setProduct(product);
  };
  useEffect(() => {
    if (product) {
      setProduct_name(product.product_name);
      setPrice(product.price);
      setStock(product.stock);
      setSold(product.sold);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [product]);

  const [product_name, setProduct_name] = useState([]);
  const [price, setPrice] = useState([]);
  const [stock, setStock] = useState([]);
  const [sold, setSold] = useState([]);

  const updateProduct = async () => {
    const productDoc = doc(db, "products", id);
    const newFields = {
      product_name: product_name,
      price: price,
      stock: stock,
      sold: sold,
    };
    await updateDoc(productDoc, newFields);
    navigate("/product");
  };

  const deleteProduct = async () => {
    const productDoc = doc(db, "products", id);
    const res = await deleteDoc(productDoc);
    navigate("/product");
  };

  let disabled = !Boolean(product_name && price && stock && sold);

  if (isLoading) return <Loading />;

  return (
    <div className="">
      <div className={`${modal ? "flex justify-center" : "ml-11 mr-5 mt-5"} `}>
        <ProductDeleteModal
          modal={modal}
          setModal={setModal}
          deleteProduct={deleteProduct}
        />
        <div className={`${modal ? "hidden" : "block"}`}>
          {product && (
            <>
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
                  onClick={updateProduct}
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
            </>
          )}
          {/* <button onClick={deleteProduct}>Delete</button> */}
        </div>
      </div>

      <div className={`fixed top-0 right-0 m-3 ${modal ? "hidden" : "block"}`}>
        <button
          type="button"
          onClick={() => setModal(true)}
          className={`text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 sm:py-3 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 sm:mr-4 sm:my-auto mr-2`}
        >
          Delete Product
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
