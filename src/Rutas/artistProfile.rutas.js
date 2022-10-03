const express = require("express");

const router = express.Router();
const {
  update,
  createProfile,
  viewProfiles,
  renderArtistProfileRegisterView,
} = require("../controladores/artistaProfile.controlador");

router.get("/artistsProfile/register", renderArtistProfileRegisterView);
router.get("/artistsProfile", viewProfiles);
router.post("/artistsProfile", createProfile);
router.put("/artistsProfile", update);

module.exports = router;
