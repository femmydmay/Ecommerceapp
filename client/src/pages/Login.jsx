import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import {
  FilledInput,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
// import React from "react";

const Login = () => {
  const navigate = useNavigate();
  // const navigatePromises = navigate("/");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = { email, password };

      const resp = await axios.post("http://localhost:5000/user/login", data);
      console.log(resp);
      if (resp.status === 200) {
        toast.success(resp.data.message, {
          position: "top-right",
          autoClose: 100,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 100,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="min-h-screen m-auto bg-slate-100 pt-10">
      <h2 className="text-center uppercase text-4xl mb-10  font-semibold">
        Log-in{" "}
      </h2>
      <form
        action=""
        className="max-sm:w-4/5 max-lg:w-2/3 w-1/3 mx-auto bg-white p-8"
        onSubmit={handleSubmit}
      >
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">email</InputLabel>

          <FilledInput
            id="filled-adornment-amount"
            value={email}
            onChange={(event) => setemail(event.target.value)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">password</InputLabel>

          <FilledInput
            id="filled-adornment-amount"
            value={password}
            onChange={(event) => setpassword(event.target.value)}
          />
        </FormControl>

        {/* <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Email</InputLabel>

          <FilledInput
            id="filled-adornment-amount"
            value={email}
            onChange={(event) => setemail(event.target.value)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Password</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            value={password}
            onChange={(event) => setpassword(event.target.value)}
            type="password"
            endAdornment={<Visibility />}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">
            Confirm Password
          </InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            value={confirmpassword}
            onChange={(event) => setconfirmpassword(event.target.value)}
            type="password"
            endAdornment={<Visibility />}
          />
        </FormControl> */}
        <ToastContainer />
        <p className="px-4 text-center text-sm">
          Please enter email and password to log in
        </p>

        <div className="justify-center">
          <button className="bg-main text-white px-20 items-center w-full py-2 ml-2 mt-7 ">
            Log-in
          </button>
        </div>
        <h3 className="w-full py-5 border-t-orange-400 border-t-[0.4px] text-sm font-bold text-center">
          Don't have an account?{" "}
          <a className="hover:text-orange-700 text-xl" href="/signup">
            {" "}
            Sign-up
          </a>
        </h3>
      </form>
    </div>
  );
};

export default Login;
