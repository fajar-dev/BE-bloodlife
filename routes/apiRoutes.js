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
  readUser,
} = require("../controllers/mu");

router.get("/mu", readUser)

module.exports = router;
