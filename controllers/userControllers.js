const passwordSchema = require("../utils/passwordSchema");
const bycrypt = require("bcrypt");
const validator = require("validator");
const UserModel = require("../models/userModel");
const mailer = require("../utils/mailer");
const sendmail = require("../utils/mailer");
const generateCode = require("../utils/generateCode");
const jwt = require("jsonwebtoken");
const signup = async (req, res) => {
  try {
    const { firstname, lastname, email, password, repeat_password } = req.body;
    if (!firstname || !lastname || !email || !password || !repeat_password) {
      return res.status(400).json({ message: "some fields are missing" });
    }

    if (password.trim() !== repeat_password.trim()) {
      return res.status(400).json({ message: "password do not match" });
    }

    if (!passwordSchema.validate(password)) {
      return res.status(400).json({ message: "invalid password" });
    }
    if (!validator.default.isEmail(email)) {
      return res.status(400).json({ message: "invalid email address" });
    }

    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "user exists" });
    }

    const salt = await bycrypt.genSalt(10);
    const hashedpass = await bycrypt.hash(password, salt);

    const subject = "Confirm Your email";

    const code = generateCode();

    const text = "Please verify your account with this code";

    const html = `
      <div style="width: 500px; border:1px solid #ccc; padding: 10px;">
      <h2 style="color:green">${code}</h2>
      <h3>Thanks!!!</h3>
      </div>
      `;

    sendmail(subject, email, html);
    const codeToken = jwt.sign({ email }, process.env.CODE_TOKEN);
    res.cookie("code", codeToken, { maxage: 1000 * 60 * 5, httpOnly: true });
    const newuser = new UserModel({
      firstname,
      lastname,
      email,
      password: hashedpass,
    });

    newuser.save();
    return res.status(200).json({ message: "please confirm email address" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error" });
  }
};

/*email <verification>*/
const verifyEmail = async (req, res) => {
  // console.log(req.cookies)
  try {
    const { code } = req.body;
    if (!code) {
      return res.status(400).json({ message: "missing field" });
    }
    if (!req.cookies.code) {
      return res.status(400).json({ message: "invalid verification code" });
    }
    // const email = jwt.verify(req.cookies.code, process.env.CODE_TOKEN).email;
    const email = req.email;
    if (!email) {
      return res.status(400).json({ message: "invalid  token" });
    }
    const update = await UserModel.updateOne(
      { email },
      {
        emailVerified: true,
      }
    );
    return res.status(200).json({ message: "verification successful" });
  } catch (error) {
    console.log(error);
  }
};

/*login of email*/
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if ((!email, !password)) {
      return res.status(400).json({ message: "missing field" });
    }
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "user does not exists" });
    }

    if (!user.emailVerified) {
      return res
        .status(400)
        .json({ message: "please verify your email address" });
    }

    const isPass = await bycrypt.compare(password, user.password);
    if (!isPass) {
      return res.status(400).json({ message: "incorrect password" });
    }
    const token = jwt.sign(user.email, process.env.USER_TOKEN_PASS);

    res.cookie("token", token, {
      maxage: 1 * 60 * 60 * 1000,
      httpOnly: true,
      // secure: true,
      path: "/",
    });
    return res.status(200).json({ message: "logged in" });
  } catch (error) {}
};

/*Profile*/
const getUser = async (req, res) => {
  try {
    const email = jwt.verify(req.cookies.token, process.env.USER_TOKEN_PASS);
    const user = await UserModel.findOne({ email }).select("-password");

    return res.status(200).json(user);
  } catch (error) {
    // console.log("err", error);
  }
};

const updateUser = async (req, res) => {
  try {
    const email = req.email;
    const user = await UserModel.findOne({ email }).select("-password");

    if (!user) {
      return res.status(400).json({ message: "user does not exists" });
    }
    const { firstname, lastname, email: mail } = req.body;

    if (!firstname || !lastname || !mail) {
      return res.status(400).json({ message: "missing field" });
    }

    user.email = mail;
    user.firstname = firstname;
    user.lastname = lastname;
    user.save();

    return res.status(200).json({ message: "user updated" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signup, login, verifyEmail, getUser, updateUser };
