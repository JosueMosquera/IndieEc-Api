const express = require("express");

const router = express.Router();
const { loggin, logOut } = require("../controladores/authControlador");

router.post("/login", loggin);
router.post("/logout", logOut);

module.exports = router;
