const express = require("express");

const router = express.Router();
const {
  update,
  createImage,
  renderArtistImagesRegisterView,
  viewImages,
} = require("../controladores/artistaImages.controlador");

router.get("/artistsImages/register", renderArtistImagesRegisterView);
router.get("/artistsImages", viewImages);
router.post("/artistsImages", createImage);
router.put("/artistsImages/", update);

module.exports = router;