import React, { useState, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
// import { useGetUserProfileQuery } from "../redux/userApi";

import {
  CircularProgress,
  FilledInput,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import { Box } from "@mui/system";

const Profile = () => {
  // const { data, error, isLoading } = useGetUserProfileQuery();
  // console.log(useGetUserProfileQuery());
  const user = useContext(UserContext);
  console.log(user);

  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const handleSubmit = (event) => {};
  if (!user) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="min-h-screen m-auto bg-slate-100 pt-10">
      <h2 className="text-center uppercase text-4xl mb-10  font-semibold">
        Profile{" "}
      </h2>
      <form
        action=""
        className="max-sm:w-4/5 max-lg:w-2/3 w-1/3 mx-auto bg-white p-8"
        onSubmit={handleSubmit}
      >
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Firstname</InputLabel>

          <FilledInput
            id="filled-adornment-amount"
            defaultValue={user.firstname}
            onChange={(event) => setFirstname(event.target.value)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Lastname</InputLabel>

          <FilledInput
            id="filled-adornment-amount"
            defaultValue={user.lastname}
            onChange={(event) => setLastname(event.target.value)}
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Email</InputLabel>

          <FilledInput
            id="filled-adornment-amount"
            defaultValue={user.email}
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
        </FormControl>
        <ToastContainer />
        <p className="px-4 text-center text-sm">
          By signing up you agree to our Terms, Privacy, Policiy and Cookies
          Policy.
        </p>

        <div className="justify-center">
          <button className="bg-main text-white px-20 items-center w-full py-2 ml-2 mt-7 ">
            Sign-up
          </button>
        </div>
        <h3 className="w-full py-5 border-t-orange-400 border-t-[0.4px] text-sm font-bold text-center">
          Already have an account?{" "}
          <a className="hover:text-orange-700 text-xl" href="/Login">
            {" "}
            Log-in
          </a>
        </h3>
      </form>
    </div>
  );
};

export default Profile;
