const userModel = require("../models/user_model");

const login = async (req, res) => {};

const signUp = async (req, res) => {
  console.log(req);
  let user_data = req.body;
  const { email } = user_data;
  console.log(user_data, email);
  const user = await userModel.findOne({ email });

  if (user) {
    res.status(401).send({
      status: "Failure",
      msg: "User already exist!",
    });
  } else {
    try {
      const new_user = await userModel.create(user_data);
      res.status(200).send({
        msg: "Success in creating new user",
        user: new_user,
      });
      console.log(new_user);
    } catch (error) {
      console.log(error);
      res.send({
        msg: "Error creating user",
        error,
      });
    }
  }
};

module.exports = { login, signUp };
