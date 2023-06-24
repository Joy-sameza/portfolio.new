const mongoose = require("mongoose");

const msgSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    subMessages: [{ name: String, msg: String }],
  },
  {
    timestamps: true,
  }
);

const msgModel = mongoose.model("msgModel", msgSchema);
module.exports = { msgModel };
