

// exports.createUser = async (req, res) => {
//   if (!req.body.firstName || !req.body.lastName || !req.body.email) {
//     return res.status(422).json({
//       firstName: "firstname is required",
//       lastName: "firstname is required",
//       email: "email is required",
//     });
//   }
//   const user = new User(req.body);
//   User.create(user, function (err, user) {
//     if (err) {
//       return res.status(403).send(err);
//     }
//     res.json(user);
//   });
// };

exports.readUser = async (req, res) => {
  connection.query("SELECT * FROM users", (err, result) => {
    if (err) {
      res.json({
        err,
      });
    } else {
      res.json({
        result,
      });
    }
  });
};

User.create = async (req, res) => {
  connection.query("INSERT INTO users  ?", (err, result) => {
    if (err) {
      res.json({
        err,
      });
    } else {
      res.json({
        result,
      });
    }
  });
};
