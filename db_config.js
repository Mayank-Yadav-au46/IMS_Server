const mongoose = require("mongoose");

async function db_connect() {
  console.log("running db_connect");
  try {
    await mongoose.connect(process.env.Mongo_url, { dbName: "IMS" });
    console.log("Connection Successfull");
  } catch (error) {
    console.log("Error in connecting DB");
    console.log(error);
    process.exit();
  }
}

module.exports = db_connect;
