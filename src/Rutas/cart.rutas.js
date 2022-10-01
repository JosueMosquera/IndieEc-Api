const express = require("express");

const router = express.Router();
const {
  pucharseConfig,
  addToCart,
  finishSell,
} = require("../controladores/cart.controlador");

router.get("/cart/add/:id", addToCart);
router.get("/cart/pucharse-config", pucharseConfig);
router.post("/cart/finish-sell", finishSell);

module.exports = router;
