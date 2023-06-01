const express = require("express");
const cors = require("cors");

const app = express();
require("dotenv").config();
const cookie = require("cookie-parser");
const connection = require("./utils/db");
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const cartRoute = require("./routes/cartRoute");

const productRoute = require("./routes/productRoute");
const PORT = process.env.PORT;
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, HEAD, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  next();
});

connection();
app.use(cookie());
app.use(express.json());
app.use("/user", userRoute);
app.use("/admin", adminRoute);
app.use("/products", productRoute);
app.use("/cart", cartRoute);
app.use("/uploads", express.static("static"));
app.all("**", (req, res) => {
  return res.status(404).json({ message: "page not found" });
});

console.log(PORT);

app.listen(PORT, () => console.log("server is listening on port " + PORT));
