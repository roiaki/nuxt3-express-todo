const router = require("express").Router();

// router.get("/", (req, res) => {
//   res.send("user router");
// });

// ユーザー登録
router.post("/register", (req, res) => {
  try {

  } catch(err) {
    return res.status(500).json(err);
  }
});

module.exports = router;