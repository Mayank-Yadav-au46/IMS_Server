const { Router } = require("express");
const m_router = new Router();
const { login, signUp } = require("../controllers/main_controller");

m_router.post("/signUp", signUp);

module.exports = m_router;
