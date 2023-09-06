const u_router = require("./routes/user_router");
const m_router = require("./routes/main_router");
const express = require("express");
const cors = require("cors");
const { urlencoded } = require("express");
const db_connect = require("./db_config");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use("/user", u_router);
app.use("/main", m_router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server Started");
  db_connect();
});
