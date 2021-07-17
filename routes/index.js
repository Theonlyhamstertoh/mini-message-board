const express = require("express");
const router = express.Router();
const Message = require("../models/message");
const formatDistanceToNow = require("date-fns/formatDistanceToNow");

/* GET home page. */
router.get("/", async function (req, res, next) {
  const messages = await Message.find();
  const formattedMessages = messages.map((message) => {
    const formatted = { ...message.toObject(), addTime: formatDistanceToNow(new Date(message.addTime)) };
    return formatted;
  });
  res.render("index", { title: "Message Board ", messages: formattedMessages });
});

router.get("/refresh", (req, res) => {
  res.redirect("back");
});
module.exports = router;
