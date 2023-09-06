const { Router } = require("express");
const u_router = Router();

const {
  create,
  edit,
  delete_data,
  get_data,
  get_user,
} = require("../controllers/user_controller");

u_router.get("/get_data", get_data);
u_router.post("/create_data", create);
u_router.put("/edit_data/:id", edit);
u_router.delete("/delete_data/:id", delete_data);
u_router.get("/get_user/:id", get_user);

module.exports = u_router;
