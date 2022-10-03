const express = require("express");

const router = express.Router();
const {
  createProfile,
  deleteProfile,
  findAll,
  findOneProfile,
  updateProfile,
} = require("../controladores/artistaProfile.controlador");

router.get("/profile", findAll);
router.get("/profile/:id", findOneProfile);
router.post("/profile/create", createProfile);
router.post("/profile/update/:id", updateProfile);
router.post("/profile/delete/:id", deleteProfile);

module.exports = router;
