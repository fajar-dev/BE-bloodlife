const express = require("express");
const router = express.Router();
// const {
//   createUser,
//   updateUser,
//   deleteUser,
// } = require("../controllers/user");

// router.post("/user", createUser);

// router.get("/user", readUser);

// router.put("/user/:userId", updateUser);

// router.delete("/user/:userId", deleteUser);


const {
  getBerita,
  getBeritaByid,
} = require("../controllers/berita");

router.get("/berita/:any", getBeritaByid)
router.get("/berita", getBerita)

module.exports = router;
