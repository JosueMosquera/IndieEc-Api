const express = require("express");

const router = express.Router();
const {
  createImages,
  deleteImages,
  findAll,
  findOneImages,
  updateImages,
} = require("../controladores/artistaImages.controlador");

router.get("/Images", findAll);
router.get("/Images/:id", findOneImages);
router.post("/Images/create", createImages);
router.post("/Images/update/:id", updateImages);
router.post("/Images/delete/:id", deleteImages);

module.exports = router;