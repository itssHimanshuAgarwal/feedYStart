//create mongoose model class ..
const mongoose = require("mongoose");
//we used destructuring here as it is same as mongoose.Schema
const { Schema } = mongoose;
//mongoose requires all the properties that we will have in the mongodb so we use Schema Object
//it describes individual property
const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});
//loading schema into Users
mongoose.model("users", userSchema);
