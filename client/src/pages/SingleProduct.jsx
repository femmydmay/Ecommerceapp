import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { title } = useParams();
  const [data, setData] = useState({});
  const [val, setVal] = useState(0);
  useEffect(() => {
    fetch(`http://localhost:5000/products/single/${title}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setData(json);
        if (json) {
          getItem(json);
        }
        // console.log(json);
      });
  }, []);
  async function getItem(dat) {
    try {
      if (dat.title !== undefined) {
      }
      const response = await axios.post(
        `http://localhost:5000/cart/item/${dat?.title}`
      );
      if (response.data) {
        setQuantity(response.data.item_exist.quantity);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (!data) {
      return;
    }
    getItem(data);
  }, [val, data]);

  const increment = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/cart/add-cart",
        data
      );
      //  console.log(data);

      setVal((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    }
  };
  const decrement = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/cart/remove",
        data
      );
      setVal((prev) => prev - 1);
      //  console.log(data);
      //  console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container m-auto grid grid-cols-2 gap-2">
        <img
          className="border-yellow-600 border-8 bg-yellow-700 m-20 w-100"
          src={data?.image}
          alt=""
        />
        <div className="ml-50px gap-4 mt-20">
          <p className="text-2xl font-bold">{data?.description}</p>
          <p className="text-2xl mt-10">{data?.price}</p>

          <div className="flex items-center gap-3 mt-7">
            <p>Quantity</p>
            <button
              className="bg-yellow-500  text-white font-bold text-xl p-1 rounded-md shadow-md"
              onClick={decrement}
            >
              
              <AiOutlineMinus />
            </button>
            <p className="text-center p-4">{quantity}</p>
            <span className="text-center p-1"></span>
            <button
              className="bg-yellow-500 text-white font-bold text-xl p-1 rounded-md shadow-md"
              onClick={increment}
            >
              <AiOutlinePlus />
            </button>
            <div>
              <button
                className="border-yellow-500 hover:bg-yellow-700 bg-yellow-500  text-gray-600  hover:text-white text-xl  w-full rounded-md mt-50 ml-10 p-8"
                onClick={() => navigate("/cart")}>
              
                 Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
