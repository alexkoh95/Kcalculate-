const express = require("express");
const router = express.Router();
const UserModel = require("../models/User");
// const bcrypt = require("bcrypt")
// const auth = require('../middleware/auth')

// router.post('/login', async (req, res) => {
//   const password = req.body.password
//   const hash = "$2b$12$CjdZKDBdue89kUyt33wkp.s1gCmZBpYAc1O/G.SY3Vasq4bXNUU2O"
//   const valid = await bcrypt.compare(password, hash)

//   if (valid) {
//     req.session.auth = true
//     res.json({ status: 'ok', msg: 'you are logged in' })
//   } else {
//     req.session.auth = false
//     res
//       .status(403)
//       .json({ status: "unauthorised", msg: "you are not logged in" })
//   }
// })



// User profile (CURRENTLY USED FOR SEEDING TEST, TO BE UPDATED)
router.get("/", async (req, res) => {
  const allUsers = await UserModel.find()

  res.send(allUsers);
})


// New user profile (TO UPDATE REDIRECT TO DASHBOARD)
router.post("/", async (req, res) => {
  if () {

  }
  await UserModel.create(req.body);

  res.json({ status: "ok", msg: "created" })
  // res.redirect("/")
})

// Update user profile
router.put("/", async (req, res) => {
  user = new UserModel({
    password: req.body.newPassword,
    // others: req.body.newOthers,
  })

  await user.save()

  res.json({ status: "ok", msg: "updated" })
})

// Remove user account
router.delete("/", async (req, res) => {
  const { name } = req.body;
  await UserModel.deleteOne({ name })

  res.json({ status: "ok", msg: "deleted" })
})


// ENCRYPTION
// router.get('/get-hash', async (req, res) => {
//   const hashPassword = await bcrypt.hash("password", 12)

//   res.send(hashPassword)
// })


// SEED TESTING - START - TO COMMENT-OUT/DELETE
router.get('/seed', async (req, res) => {
  // await UserModel.deleteMany({})

  await UserModel.create(
    [
      { name: "alex", password: "lean" },
      { name: "iman", password: "healthy" },
    ],
    (err, data) => {
      // res.json({ status: "ok", msg: "seeded" })
      res.redirect("/nutrition/user")
    }
  );
});
// SEED TESTING - END - TO COMMENT-OUT/DELETE

module.exports = router;
