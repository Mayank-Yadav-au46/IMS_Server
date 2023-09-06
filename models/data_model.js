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

const data_model = mongoose.model("IMS_data", data_schema);
module.exports = data_model;
