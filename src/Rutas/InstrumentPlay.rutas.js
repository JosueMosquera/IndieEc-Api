const express = require("express");

const router = express.Router();
const {
  actualizar, 
  borrar, 
  crearInstrumentPlay, 
  mostrarInstrumentPlay, 
  renderInstrumentPlayView
} = require("../controladores/InstrumentPlay.controlador");

router.get("/InstrumentPlays/register", renderInstrumentPlayView);
router.get("InstrumentPlays", mostrarInstrumentPlay);
router.post("/InstrumentPlays", crearInstrumentPlay);
router.put("/InstrumentPlays/", actualizar);
router.delete("InstrumentPlays", borrar);


module.exports = router;