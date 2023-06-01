import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const ProductList = () => {
  //   const navigate = useNavigate();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [discount, setdiscount] = useState("");

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products/get-products")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setimage(data);
          setdescription(data);
          setprice(data);
          setdiscount(data);
          setData(data);
        }
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
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
                  className="px-6 py-3 text-left text-xs font-medium text-black-700 uppercase tracking-wider"
                >
                  ID
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
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-black-700 uppercase tracking-wider"
                >
                  Image
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
              {data.map((dat) => {
                return (
                  <tr>
                    <td className="mb-4.5">Ayo</td>
                    <td>{dat.title}</td>
                    <td>{dat.price}</td>
                    <td>
                      <img src={dat.image} width={50} />
                    </td>

                    <td>
                      <Link to={`/EditProduct/${dat.title}`}>
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
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
