const express = require("express");

const router = express.Router();

const {
  addToCart,
  getCart,
  removeFromCart,
  deleteCartItem,
  getCartItem
} = require("../controllers/cartController");
const authorize = require("../middlewares/AuthMiddleware");

router.get("/getall", authorize, getCart);
router.post("/item/:title", authorize, getCartItem);
router.post("/add-cart", authorize, addToCart);
router.post("/remove", authorize, removeFromCart);
router.post("/delete", authorize, deleteCartItem);

module.exports = router;
