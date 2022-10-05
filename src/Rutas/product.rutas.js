const express = require("express");

const router = express.Router();
const {
  createProduct,
  deleteProduct,
  findAll,
  findOneProduct,
  updateProduct,
} = require("../controladores/producto.controlador");

router.get("/products", findAll);
router.get("/products/:id", findOneProduct);
router.post("/products", createProduct);
router.post("/products-update/:id", updateProduct);
router.get("products-delete/:id", deleteProduct);

module.exports = router;
