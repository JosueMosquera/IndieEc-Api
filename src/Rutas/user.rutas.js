const express = require("express");

const router = express.Router();
const {
  createUser,
  getUsers,
  renderHome,
} = require("../controladores/usuario.controlador");

router.get("/", renderHome);
router.get("/users", getUsers);
router.post("/users", createUser);

module.exports = router;
