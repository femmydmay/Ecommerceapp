// import {
//   FilledInput,
//   FormControl,
//   IconButton,
//   Input,
//   InputAdornment,
//   InputLabel,
//   TextField,
// } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Loginagain = () => {
//   const navigate = useNavigate();
//   const navigatePromises = navigate("/");
//   return (
//     <div className="min-h-screen bg-slate-100 pt-10">
//       <h2 className="text-center uppercase text-4xl mb-10  font-semibold">
//         Login{" "}
//       </h2>
//       <form action="" className="w-1/3 mx-auto bg-white p-8">
//         <FormControl fullWidth sx={{ m: 1 }} variant="filled">
//           <InputLabel htmlFor="filled-adornment-amount">
//             Username or email
//           </InputLabel>
//           <FilledInput id="filled-adornment-amount" />
//         </FormControl>
//         <FormControl fullWidth sx={{ m: 1 }} variant="filled">
//           <InputLabel htmlFor="filled-adornment-amount">Password</InputLabel>
//           <FilledInput
//             id="filled-adornment-amount"
//             type="password"
//             endAdornment={<Visibility />}
//           />
//         </FormControl>

//         <div className="justify-center">
//           <button className="bg-main text-white px-20 items-center w-full py-2 ml-2 mt-7 ">
//             Login
//           </button>
//         </div>
//         {/* <div className="justify-center">
//         <button disabled={!text} onChange={() => handleBtn()} text="Add" /></button> */}

//         <p className="px-4 text-center text-sm mt-7">Forgot Password</p>

//         <h3 className="w-full py-5 border-t-orange-400 border-t-[0.4px] text-sm font-bold text-center ">
//           Don't have an account?{" "}
//           <a className=" hover:text-orange-700 text-xl" href="/SignUp">
//             {" "}
//             Sign-up
//           </a>
//         </h3>
//       </form>
//       navigate("/");
//     </div>
//   );
// };

// export default Loginagain;
