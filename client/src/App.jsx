import { Route, Routes } from "react-router-dom";

import PageLayout from "./layouts/PageLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Verify from "./pages/Verify";
// import BlogProfile from "./pages/BlogProfile";
import Card from "./pages/Cardprofile";
import Profile from "./pages/Profile";
import UploadApp from "./pages/UploadApp";

import axios from "axios";
import { useEffect, useState, createContext } from "react";
export const UserContext = createContext();
import Dashboard from "./pages/Dashboard";
import DashLayout from "./layouts/DashLayout";
import SingleProduct from "./pages/SingleProduct";
import EditProduct from "./pages/EditProduct";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";

const App = () => {
  axios.defaults.withCredentials = true;
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user/profile")

      .then((resp) => {
        if (resp) {
          setData(resp.data);
        }
      });
  }, []);

  return (
    <UserContext.Provider value={data}>
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <Home />
            </PageLayout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify" element={<Verify />} />
        {/* <Route path="/country/:name" element={<BlogProfile />} /> */}
        {/* <Route path="/card" element={<Card />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/uploadapp" element={<UploadApp />} />
        <Route path="/products/:title" element={<SingleProduct />} />
        <Route path="/EditProduct/:title" element={<EditProduct />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/profile"
          element={
            <PageLayout>
              <Profile />
            </PageLayout>
          }
        />

        <Route
          path="/dashboard"
          element={
            <DashLayout>
              <Dashboard />
            </DashLayout>
          }
        />
      </Routes>
    </UserContext.Provider>
  );
};

export default App;
