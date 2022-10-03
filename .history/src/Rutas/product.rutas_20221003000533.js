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
router.put("/products/update", updateProduct);
router.delete("products/delete", deleteProduct);

module.exports = router;
