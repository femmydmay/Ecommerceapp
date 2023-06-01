import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
import {
    useDecrementMutation, useIncrementMutation,useGetCartQuery} from "../redux/cartApi";
const Cart = () => {
    //   const navigate = useNavigate();

const [increase, response] = useIncrementMutation()
    const [data, setData] = useState([]);
    useEffect(() => {
        let controller = new AbortController();
        const resp = axios.get('http://localhost:5000/cart/getall', {
                signal:controller.signal
        })
            .then(resp => {
                if (resp.status === 200) {
              
                    setData(resp.data)
          }
        })
        return () => controller?.abort();
    }, []);
   
    const handleDelete = async (title) => {
        try {
            const response = await axios.delete(
                `http://localhost:5000/products/single/${title}`
            );
            if (response) {
                alert("product deleted");
            }
        } catch (error) {
            console.log(error);
        }
    };
    const increment = async (item, user) => {
        try {
           const data = {...item, user}
            increase(data)
              .unwrap()
              .then(() => {})
              .then((error) => {
                console.log(error);
              });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
    // const decrement = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response = await axios.post(
    //             "http://localhost:5000/cart/remove",
    //             data
    //         );
    //         setVals((prev) => prev - 1);
    //         //  console.log(data);
    //         //  console.log(response);
    //     } catch (error) {
    //         console.log(error);
    //     }

        return (
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"></div>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                {/* <th>ID, PRODUCT TITLE, PRICE AND ACTIONS</th> */}
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-4 py-7 text-left text-xs font-medium text-black-700 uppercase tracking-wider"
                                    >
                                        Product
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-black-700 uppercase tracking-wider"
                                    >
                                        ID
                                        {/* <button
                                            className="bg-yellow-500  text-white font-bold text-xl p-1 rounded-md shadow-md"
                                        onClick={decrement}
                                        >
                                            <AiOutlineMinus />
                                        </button>
                                        <p className="text-center p-4">{data.price}</p>
                                        <span className="text-center p-1"></span>
                                        <button
                                            className="bg-yellow-500 text-white font-bold text-xl p-1 rounded-md shadow-md"
                                        onClick={increment}
                                        >
                                            <AiOutlinePlus />
                                        </button> */}
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-black-700 uppercase tracking-wider"
                                    >
                                        Product Title
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-black-700 uppercase tracking-wider"
                                    >
                                        Item Price
                                      
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-black-700 uppercase tracking-wider"
                                    >
                                        Action
                                    </th>

                                    {/* <tr>
                <th>ID</th>
                <th>Product title</th>
                <th>Price</th>
                <th>Action</th>
              </tr> */}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {data?.cart?.map((dat) => {
                                    return (
                                      <tr>
                                        <td>
                                          {/* <img className="mt-6 ml-7" src={dat.image} width={100} /> */}
                                        </td>
                                        <td className="mb-4.5">Buy</td>
                                        <td>{dat?.title}</td>
                                        <td>{dat?.price}</td>
                                        <td>
                                          <button
                                            className="bg-yellow-500  text-white font-bold text-xl p-1 rounded-md shadow-md"
                                            // onClick={decrement}
                                          >
                                            <AiOutlineMinus />
                                          </button>
                                          <p className="text-center text-slate-800 p-4">
                                            {dat.quantity}
                                          </p>
                                          <span className="text-center p-1"></span>
                                          <button
                                            className="bg-yellow-500 text-white font-bold text-xl p-1 rounded-md shadow-md"
                                            onClick={()=>increment(dat, data.user)}
                                          >
                                            <AiOutlinePlus />
                                          </button>
                                        </td>
                                        <td>
                                          <Link
                                            to={`/EditProduct/${dat.title}`}
                                          >
                                            <button className="bg-red-600 rounded-xl px-6 text-white mr-7 ">
                                              Edit
                                            </button>
                                          </Link>
                                          <button
                                            className="bg-green-600 rounded-xl px-4 text-white "
                                            onClick={() => {
                                              handleDelete(dat.title);
                                            }}
                                          >
                                            Remove Item
                                          </button>
                                        </td>
                                      </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        <div>
                            <section className="bg-gray-400 h-fit mt-20">
                                <header className="p-2">
                                    <p className="font-bold">CART SUMMARY</p>
                                </header>

                                <div className="flex justify-between font-bold p-2">
                                    <p className="">Subtotal</p>
                                    {/* <p>₦ {new Intl.NumberFormat().format({price})}</p> */}
                                </div>

                                <div className="p-2">
                                    <button className="text-center py-1 shadow-md rounded-md  bg-yellow-700 font-bold font-xl  text-white w-full">
                                        CHECKOUT
                                        {/* (₦ {new Intl.NumberFormat().format(price())}) */}
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
// }

export default Cart;
