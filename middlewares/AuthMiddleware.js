const express = require("express");
const jwt = require("jsonwebtoken");
const authorize = async (req, res, next) => {
  try {
    console.log(req.cookies);
    if (!req.cookies.token) {
      return res.status(401).json({ message: "please log in" });
    }
    const email = jwt.verify(req.cookies.token, process.env.USER_TOKEN_PASS);

    if (!email) {
      return res.status(500).json({ message: "invalid token" });
    }
    req.email = email;

    next();
  } catch (error) {
    console.log(error);

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "please log in" });
    }
  }
};

module.exports = authorize;
