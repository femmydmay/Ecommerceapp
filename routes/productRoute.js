const express = require("express");
const upload = require("../utils/multer-uploads");
const authorize = require("../middlewares/AuthMiddleware");

const {
  addProducts,
  getAllProducts,
  getSingleProduct,
  editProducts,
  deleteProduct,
} = require("../controllers/productsController");
const router = express.Router();

router.post("/add-products", upload.single("file"), authorize, addProducts);

router.get("/get-products", getAllProducts);

router.get("/single/:title", getSingleProduct);

router.patch("/single/:title", upload.single("file"), authorize, editProducts);

router.delete("/single/:title", authorize, deleteProduct);
module.exports = router;

// https://github.com/chibyk100/ECOM.git
