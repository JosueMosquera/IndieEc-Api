const express = require("express");

const router = express.Router();
const {
  actualizar, 
  borrar, 
  crearPeopleAssist, 
  mostrarPeopleAssist, 
  renderPeopleAssistView
} = require("../controladores/PeopleAssist.controlador");

router.get("/PeopleAssists/register", renderPeopleAssistView);
router.get("PeopleAssists", mostrarPeopleAssist);
router.post("/PeopleAssists", crearPeopleAssist);
router.put("/PeopleAssists/", actualizar);
router.delete("PeopleAssists", borrar);


module.exports = router;