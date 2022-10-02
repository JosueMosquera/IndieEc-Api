const express = require("express");

const router = express.Router();
const {
  createMusic,
  deleteMusic,
  findAll,
  findOneMusic,
  updateMusic,
} = require("../controladores/artistaMusic.controlador");

router.get("/musics", findAll);
router.get("/musics/:id", findOneMusic);
router.post("/musics/create", createMusic);
router.put("/musics/update", updateMusic);
router.delete("musics/delete:id", deleteMusic);

module.exports = router;