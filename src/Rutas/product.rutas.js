const express = require("express");

const router = express.Router();
const {
  createProduct,
  deleteProduct,
  findAll,
  renderCreateProduct,
  findOneProduct,
  updateProduct,
} = require("../controladores/producto.controlador");

router.get("/products", findAll);
router.get("/products/:id", findOneProduct);
router.post("/products", createProduct);
router.post("/products-update/:id", updateProduct);
router.get("/products-delete/:id", deleteProduct);
router.get("/create-product", renderCreateProduct);

module.exports = router;
