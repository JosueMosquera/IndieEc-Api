const express = require("express");

const router = express.Router();
const {
  borrarCatalogo,
  crearCatalogo,
  mostrarCatalogo,
  mostrarArtistasCatalogo,
} = require("../controladores/artistaCatalogo.controlador");

router.get("/artist-catalogue", mostrarArtistasCatalogo);
router.get("/artist-catalogue/:id", mostrarCatalogo);
router.get("/create-artist-catalogue", crearCatalogo);
router.post("/delete-artist-catalogue", borrarCatalogo);

module.exports = router;
