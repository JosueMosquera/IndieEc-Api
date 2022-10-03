const express = require("express");

const router = express.Router();
const {
  createVideo,
  deleteVideo,
  findAll,
  findOneVideo,
  updateVideo,
} = require("../controladores/artistaVideo.controlador");

router.get("/videos", findAll);
router.get("/videos/:id", findOneVideo);
router.post("/videos/create", createVideo);
router.post("/videos/update/:id", updateVideo);
router.post("/videos/delete/:id", deleteVideo);

module.exports = router;