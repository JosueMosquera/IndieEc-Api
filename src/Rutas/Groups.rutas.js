const express = require("express");

const router = express.Router();
const {
  crearGrupo,
  mostrarGrupos,
} = require("../controladores/grupos.controlador");

router.get("/groups", mostrarGrupos);
router.post("/groups", crearGrupo);

module.exports = router;
