const express = require("express");

const router = express.Router();
const {
  createRequest,
  deleteRequest,
  findMyRequests,
  findOneProduct,
  updateRequest,
  findAll,
} = require("../controladores/request.controlador");

router.get("/requests/:userId", findMyRequests);
router.get("/requests", findAll);
router.get("/requests/:id", findOneProduct);
router.post("/requests", createRequest);
router.post("/requests-update/:id", updateRequest);
router.get("/requests-delete/:id", deleteRequest);

module.exports = router;
