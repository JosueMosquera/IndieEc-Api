const express = require("express");

const router = express.Router();
const {
  loggin,
  logOut,
  showLogin,
} = require("../controladores/auth.controlador");

router.get("/show-login", showLogin);
router.post("/login", loggin);
router.post("/logout", logOut);

module.exports = router;
