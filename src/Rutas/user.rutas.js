const express = require("express");

const router = express.Router();
const {
  createUser,
  getUsers,
  renderHome,
  getRegister,
  renderAdminHome,
} = require("../controladores/usuario.controlador");

router.get("/", renderHome);
router.get("/get-register", getRegister);
router.get("/users", getUsers);
router.post("/users", createUser);
router.get("/admin", renderAdminHome);

module.exports = router;
