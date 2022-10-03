const express = require("express");

const router = express.Router();
const {
  borrarCatalogo,
  crearCatalogo,
  mostrarCatalogo,
} = require("../controladores/artistaCatalogo.controlador");


router.get("/artists/register", renderListCatalogueView);
router.get("/artist-catalogue/:id", mostrarCatalogo);
router.get("/create-artist-catalogue", crearCatalogo);
router.post("/delete-artist-catalogue", borrarCatalogo);

module.exports = router;
