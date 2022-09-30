const express = require("express");

const router = express.Router();
const {
  borrarCatalogo,
  crearCatalogo,
  mostarCatalogo,
} = require("../controladores/artistaCatalogo.controlador");

router.get("/artists-catalogue", mostarCatalogo);
router.get("/create-artist-catalogue", crearCatalogo);
router.post("/delete-artist-catalogue", borrarCatalogo);

module.exports = router;
