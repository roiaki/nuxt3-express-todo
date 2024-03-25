const router = require("express").Router();
const User = require("../models/TodoUser");

router.get("/", (req, res) => {
  res.send("auth router");
});

// ユーザー登録　TODOコントローラーとして別ファイルへ
router.post("/register", async (req, res) => {
  try {
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
    const user = await newUser.save();
    return res.status(200).json(user);
  } catch(err) {
    return res.status(500).json(err);
  }
});

// ログイン　TODOコントローラーとして別ファイルへ
router.post("/login", async (req, res) => {
  try {
    // メールアドレス誤り
    const user = await User.findOne({email: req.body.email});
    if(!user) {
      return res.status(404).send("ユーザーが見つかりません");
    }

    // パスワードの確認
    const valiedPassword = req.body.password === user.password;
    if(valiedPassword) {
      return res.status(200).json(user);
    } else {
      return res.status(400).json("パスワードが異なります");
    }

  } catch(err) {
    return res.status(500).json(err);
  }
});

module.exports = router;