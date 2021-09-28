const express = require("express");
const router = express.Router();
const UserModel = require("../models/User");
// const bcrypt = require("bcrypt")
const auth = require('../middleware/auth')

// // Login check
router.post('/login', async (req, res) => {
  const enteredPassword = req.body.password
  console.log("enter: ", enteredPassword)
  const dbPassword = await UserModel.find({ username: req.body.username })
  console.log("db: ", dbPassword)

  if (enteredPassword === dbPassword[0].password) {
    // req.session.auth = true
    res.json({ status: 'ok', msg: 'you are logged in' })
    console.log("passwords match")

  } else {
    // req.session.auth = false
    res
      .status(403)
      .json({ status: "unauthorised", msg: "you are not logged in" })
    console.log("passwords do not match")
  }
})

// Find user profile (CURRENTLY USED FOR SEEDING TEST, TO BE UPDATED)
router.get("/find", async (req, res) => {
  console.log(req.body)
  try {
    const found = await UserModel.find({ username: req.body.username })
    console.log(found)
    res.json({ status: "ok", found });
  } catch (error) {
    res.json({ status: "not ok", msg: "user not found" });
  }
})

// Find user profile 2
router.get("/:id", async (req, res) => {
  console.log(req.body)
  try {
    const found = await UserModel.find({ username: req.params.id })
    console.log(found)
    res.json({ found });
  } catch (error) {
    res.json({ status: "not ok", msg: "user not found" });
  }
})


// New user profile (TO UPDATE REDIRECT TO DASHBOARD)
router.post("/create", async (req, res) => {
  console.log(req.body)
  await UserModel.create(req.body);

  res.json({ status: "ok", msg: "created" })
  // res.redirect("/")
})

// Update user profile
router.put("/update", async (req, res) => {
  await UserModel.updateOne(
    {
      username: req.body.username,
    },
    // password: password,
    // targetCalories: calories,
    // targetCarbohydrates: carbohydrates,
    // targetProtein: protein,
    // targetFats: fats,
    // currentWeight: currentWeight,
    // targetWeight: targetWeight,
    {
      username: req.body.newUsername,
      password: req.body.newPassword,
      targetCalories: req.body.newCalories,
      targetCarbohydrates: req.body.newCarbohydrates,
      targetProtein: req.body.newProtein,
      targetFats: req.body.newFats,
      currentWeight: req.body.newCurrentWeight,
      targetWeight: req.body.newTargetWeight,
    }
  )

  await user.save()

  res.json({ status: "ok", msg: "updated" })
})

// Remove user account
router.delete("/delete", async (req, res) => {
  const { name } = req.body;
  await UserModel.deleteOne({ name })

  res.json({ status: "ok", msg: "deleted" })
})

// SEED TESTING - START - TO COMMENT-OUT/DELETE
router.get('/seed', async (req, res) => {
  // await UserModel.deleteMany({})

  await UserModel.create(
    [
      {
        username: "Alex",
        password: "123",
        targetCalories: 2152,
        targetCarbohydrates: 242,
        targetProtein: 161,
        targetFats: 60,
        currentWeight: 78,
        targetWeight: 70
      },
      {
        username: "Iman",
        password: "456",
        targetCalories: 99,
        targetCarbohydrates: 99,
        targetProtein: 99,
        targetFats: 99,
        currentWeight: 99,
        targetWeight: 99
      },
      {
        username: "Wei Hong",
        password: "789",
        targetCalories: 99,
        targetCarbohydrates: 99,
        targetProtein: 99,
        targetFats: 99,
        currentWeight: 99,
        targetWeight: 99
      }
    ],
    (err, data) => {
      res.json({ status: "ok", msg: "seeded" })
      // res.redirect("/nutrition/user")
    }
  );
});
// SEED TESTING - END - TO COMMENT-OUT/DELETE

module.exports = router;
