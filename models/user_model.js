const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const data_schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  handle: {
    type: String,
    required: true,
  },
  followers: {
    type: Number,
    required: true,
  },
});

const user_schema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  data: [{ data_schema }],
});

const user_model = mongoose.model("IMS_user", user_schema);
module.exports = user_model;
