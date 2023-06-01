const express = require("express");

const userControllers = require("../controllers/userControllers");
const router = express.Router();
const authorize = require('../middlewares/AuthMiddleware')

router.post("/create-account", userControllers.signup);
router.post("/verify-email", userControllers.verifyEmail);
router.post("/login", userControllers.login);
router.get("/profile", authorize, userControllers.getUser);
router.put("/update", authorize, userControllers.updateUser);

module.exports = router;
