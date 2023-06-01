// import Products from "../components/Products";
// import { limited_stock, top_selling } from "../pages/product_list";
// import axios from "axios";
// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Home = () => {
//   // const navigate = useNavigate();
//   const [image, setimage] = useState("");
//   const [description, setdescription] = useState("");
//   const [price, setprice] = useState("");
//   const [discount, setdiscount] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const data = {
//         image,
//         description,
//         price,
//         discount,
//       };

//       const resp = await axios.get(
//         "http://localhost:5000/products/get-products",
//         data
//       );
//       console.log(resp);
//       if (resp.status === 200) {
//         toast.success(resp.data.message, {
//           position: "top-right",
//           autoClose: 100,
//           hideProgressBar: true,
//           closeOnClick: false,
//           pauseOnHover: false,
//           draggable: false,
//           progress: undefined,
//           theme: "light",
//         });
//         //   navigate("/verify");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response.data.message, {
//         position: "top-right",
//         autoClose: 100,
//         hideProgressBar: true,
//         closeOnClick: false,
//         pauseOnHover: false,
//         draggable: false,
//         progress: undefined,
//         theme: "light",
//       });
//     }
//   };
//   return (
//     <>
//       <div className="w-[80%] mx-auto ">
//         {/* <Banner /> */}
//         <Products item={top_selling} color={"white"} title="Top Selling Item" />
//         <Products
//           item={limited_stock}
//           color={"#B5DE93"}
//           title="Defacto Official Store"
//         />
//       </div>
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default Home;
