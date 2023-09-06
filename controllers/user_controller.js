const userModel = require("../models/user_model");
const dataModel = require("../models/data_model");

const get_data = async (req, res) => {
  try {
    let obj = await dataModel.find();
    res.status(200).send({
      msg: "All the data fetched",
      obj: obj,
    });
  } catch (error) {
    res.status(400).send({
      msg: "Error in fetching data",
      status: "Failure ",
    });
  }
};

const create = async (req, res) => {
  const obj = req.body;
  const { handle } = req.body;

  const user = await dataModel.findOne({ handle });
  if (user) {
    res.status(401).send({
      msg: "User already exist!",
      status: "Failure",
    });
  } else {
    try {
      let new_data = await dataModel.create(obj);
      console.log(new_data);
      res.status(200).send({
        msg: "data created",
        data: new_data,
      });
    } catch (error) {
      res.send({
        status: "Failure",
        msg: "Error in creating data",
        status: "Failure",
      });
    }
  }
};

const edit = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const result = await dataModel.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    console.log(result);

    // if (!result) {
    //   res.status(404).send({
    //     msg: "Data not found",
    //     status: "Failure",
    //   });
    // }

    res.status(200).send({
      msg: "Data updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      msg: "Error in updating data",
      status: "Failure",
    });
  }
};

const delete_data = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await dataModel.findByIdAndRemove(id);

    if (!result) {
      return res.status(404).send({
        msg: "Data not found",
        status: "Failure",
      });
    }

    res.status(200).send({
      msg: "Data deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      msg: "Error in deleting data",
      status: "Failure",
    });
  }
};

const get_user = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await dataModel.findOne({ handle });
    res.status(200).send({
      msg: "Got user!",
      user: user,
    });
  } catch (error) {
    res.status(400).send({
      msg: "Didn't got the user",
      status: "failure",
      error: error,
    });
  }
};

module.exports = { get_data, create, edit, delete_data, get_user };
