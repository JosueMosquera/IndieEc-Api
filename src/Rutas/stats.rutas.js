const express = require("express");

const router = express.Router();
const {
  createStats,
  findAll,
  findOneStats,
} = require("../controladores/stats.controlador");

router.get("/stats", findAll);
router.get("/stats/:id", findOneStats);
router.post("/stats/create", createStats);

module.exports = router;