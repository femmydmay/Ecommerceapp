const express = require("express");
const upload = require("../utils/multer-uploads");

const {
  addProducts,
  getAllProducts,
} = require("../controllers/productsController");
const authorize = require("../middlewares/AuthMiddleware");
const router = express.Router();

router.post("/add-products", upload.single("file"), authorize, addProducts);

router.get("/get-products", getAllProducts);

router.delete("/single/:title", async (req, res) => {
  console.log(req.body.title.replace(" ", ""));

  const { title } = req.body;
  try {
    const delproduct = await ProductSchema.findOneAndDelete({
      title: title.replace(" ", ""),
    });
    console.log(delproduct);
    return res.status(200).send("product delete successfully");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

// https://github.com/chibyk100/ECOM.git
