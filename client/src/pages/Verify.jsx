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

const verify = () => {
  const navigate = useNavigate();
  // const navigatePromisess = navigate("/login");

  const [verifycode, setverifycode] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = { code:verifycode };

      const resp = await axios.post(
        "http://localhost:5000/user/verify-email",
        data
      );
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
        navigate("/login");
      }
    } catch (error) {
      //   console.log(error);
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
        Verify Email{" "}
      </h2>
      <p className=" mx-80 text-center text-lg mt-20 font-bold mb-10 rounded py-5 px-10 bg-slate-500">
        We'll send a verification code to the email address you used to create
        the account. Please verify your account to be able to log in.
      </p>
      <form
        action=""
        className="max-sm:w-4/5 max-lg:w-2/3 w-1/3 mx-auto bg-white p-8"
        onSubmit={handleSubmit}
      >
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">
            Email or code
          </InputLabel>

          <FilledInput
            id="filled-adornment-amount"
            value={verifycode}
            onChange={(event) => setverifycode(event.target.value)}
          />
        </FormControl>
        {/* <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">password</InputLabel>

            <FilledInput
              id="filled-adornment-amount"
              value={password}
              onChange={(event) => setpassword(event.target.value)}
            />
          </FormControl> */}

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

        <div className="justify-center">
          <button className="bg-main text-white px-20 items-center w-full py-2 ml-2 mt-7 ">
            Submit
          </button>
        </div>
        <h3 className="w-full py-5 border-t-orange-400 border-t-[0.4px] text-sm font-bold text-center">
          Didn't get a code ?{" "}
          <a className="hover:text-orange-700 text-xl" href="/signup">
            {" "}
            Click here
          </a>
        </h3>
      </form>
    </div>
  );
};

export default verify;
