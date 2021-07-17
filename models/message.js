const mongoose = require("mongoose");
const formatDistanceToNow = require("date-fns/formatDistanceToNow");

const messageSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  addTime: {
    type: Date,
    required: true,
  },
});

messageSchema.virtual("format_time").set(function () {
  this.addTime = formatDistanceToNow(this.addTime);
});

const Message = mongoose.model("message", messageSchema);

module.exports = Message;
