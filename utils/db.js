const mongoose = require("mongoose");

const connection = () => {
  mongoose
    .connect(process.env.MONGODBURL, {
      useNewUrlParser: true,
    })
    .then((connect) => console.log("connected to mongodb"))
    .catch((err) => console.log("mongodb connection failed", err));
  mongoose.Promise = global.Promise;
};
mongoose.set("strictQuery", false);
module.exports = connection;
