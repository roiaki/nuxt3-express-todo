const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const PORT = 5000;
const mongoose = require("mongoose");
require("dotenv").config();

// DB接続
mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("DB接続成功");
  }).catch((err) => {
    console.log(err);
  });



// app.get("/", (req, res) => {
//   res.send("hello express");
// });

// app.get("/users", (req, res) => {
//   res.send("hello express users");
// });

// ミドルウェア
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);



app.listen(PORT, () => console.log("サーバーが起動しました") );