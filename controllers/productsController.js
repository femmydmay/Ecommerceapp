const ProductSchema = require("../models/Products");
const upload = require("../utils/multer-uploads");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");
const multer = require("multer");

const addProducts = async (req, res) => {
  try {
    // const email = jwt.verify(req.cookies.token, process.env.USER_TOKEN_PASS);
    const email = req.email;

    if (!email) {
      return res.status(400).json({ message: "invalid token" });
    }
    const user = await UserModel.findOne({ email }).select("-password");

    if (!user) {
      return res.status(400).json({ message: "you are not logged in" });
    }

    const { title, price, description } = req.body;
    const { filename, size, mimetype } = req.file;
    if (!title || !price || !description) {
      return res.status(400).json({ message: "some fields are missing" });
    }

    const product = new ProductSchema({
      user: user._id,
      title,
      price,
      description,
      image: `http://localhost:5000/uploads/${filename}`,
    });

    product.save();
    return res.status(200).json({ message: "product uploaded" });

    //  upload(req, res, function (err) {
    //    if (err instanceof multer.MulterError) {
    //      // A Multer error occurred when uploading.
    //    } else if (err) {
    //      // An unknown error occurred when uploading.
    //    }

    //    // Everything went fine.
    //  });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error while uploading products" });
  }
};
const getAllProducts = async (req, res) => {
  try {
    const products = await ProductSchema.find();

    return res.status(200).json(products);
  } catch (error) {}
};

const editProducts = async (req, res) => {
  try {
    const email = req.email;

    if (!email) {
      return res.status(400).json({ message: "invalid token" });
    }
    const user = await UserModel.findOne({ email }).select("-password");

    if (!user) {
      return res.status(400).json({ message: "you are not logged in" });
    }
    const { title: product_title } = req.params;
    if (!product_title) {
      return res.status(400).json({ message: "invalid request" });
    }

    const { title, description, price } = req.body;

    if (!title || !description || !price) {
      return res.status(400).json({ message: "missing fields" });
    }
    const product = await ProductSchema.findOne({ title: product_title });

    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    const { filename, size, mimetype } = req.file;
    product.title = title;
    product.price = price;
    product.description = description;
    product.image = `http://localhost:5000/uploads/${filename}`;
    product.save();
    return res.status(200).json({ message: "product updated" });
  } catch (error) {
    console.log(error);
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { title } = req.params;
    console.log("ddd", title);
    if (!title) {
      return res.status(400).json()({ message: "invalid request" });
    }
    const product = await ProductSchema.findOne({ title });
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    return res.status(200).json(product);
  } catch (error) {}
};

const deleteProduct = async (req, res) => {
  try {
    const email = req.email;

    if (!email) {
      return res.status(400).json({ message: "invalid token" });
    }
    const user = await UserModel.findOne({ email }).select("-password");

    if (!user) {
      return res.status(400).json({ message: "you are not logged in" });
    }
    const { title } = req.params;
    if (!title) {
      return res.status(400).json()({ message: "invalid request" });
    }
    const product = await ProductSchema.deleteOne({ title });
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    return res.status(200).json({ message: "product deleted" });
  } catch (error) {}
};

module.exports = {
  addProducts,
  getAllProducts,
  editProducts,
  getSingleProduct,
  deleteProduct,
};
