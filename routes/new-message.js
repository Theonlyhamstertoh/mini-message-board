const express = require("express");
const router = express.Router();
const Message = require("../models/message");
/* GET users listing. */
router.get("/", function (req, res) {
  res.render("form", { title: "Add Message" });
});

router.post("/", async function (req, res) {
  const newMessage = new Message({ ...req.body, addTime: Date.now() });
  console.log("newMessage", newMessage);
  await newMessage.save();
  res.redirect("/");
});
module.exports = router;
