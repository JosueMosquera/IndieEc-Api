const express = require("express");

const router = express.Router();
const { loggin, logOut } = require("../controladores/artistaAuth.controlador");

router.post("/login/artist", loggin);
router.post("/logout/artist", logOut);

module.exports = router;
