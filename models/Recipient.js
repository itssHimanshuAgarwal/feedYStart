const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false },
});

//rather than registering this with mongoose we will export it

module.exports = recipientSchema;
