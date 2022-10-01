const express = require("express");

const router = express.Router();
const {
  actualizar,
  borrar,
  crearArtista,
  mostrarArtistas,
  renderArtistRegisterView,
} = require("../controladores/artista.controlador");

router.get("/artists/register", renderArtistRegisterView);
router.get("artists", mostrarArtistas);
router.post("/artists", crearArtista);
router.put("/artists/", actualizar);
router.delete("artists", borrar);

module.exports = router;
