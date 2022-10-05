const express = require("express");

const router = express.Router();
const {
  borrarCatalogo,
  crearCatalogo,
  mostrarCatalogo,
  mostrarArtistasCatalogo,
  renderCatalogueRegisterView,
} = require("../controladores/artistaCatalogo.controlador");

router.get("/catalogue-register", renderCatalogueRegisterView);
router.get("/artist-catalogue", mostrarArtistasCatalogo);
router.get("/artist-catalogue/:id", mostrarCatalogo);
router.post("/create-artist-catalogue", crearCatalogo);
router.delete("/delete-artist-catalogue", borrarCatalogo);

module.exports = router;