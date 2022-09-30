const express = require("express");

const router = express.Router();
const { loggin, logOut } = require("../controladores/auth.controlador");

router.post("/login", loggin);
router.post("/logout", logOut);

module.exports = router;
