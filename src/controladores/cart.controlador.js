const express = require("express");
const router = express.Router();
const { dataSource } = require("../dbConfig/appDataSource");
const Request = require("../models/Request").Request;
const Product = require("../models/Product").Product;
const cartCtl = {};
const productsCart = {
  catalogueItems: [],
  total: 0,
};

cartCtl.addToCart = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await dataSource
      .getRepository(Product)
      .findOne({ where: { id: productId } });
    if (product) {
      // json data

      productsCart.catalogueItems.push({
        name: product.name,
        code: product.code,
        price: product.price,
        id: product.id,
      });
      if (productsCart.catalogueItems.length > 0) {
        let accumulator = 0;
        for (const item of productsCart.catalogueItems) {
          productsCart.total = accumulator += item.price;
        }
      }
      res.render("e-commerce/cart", productsCart);
    } else {
      res.json({
        message: "no existe el producto que quiere agregar",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

cartCtl.pucharseConfig = async (req, res) => {
  res.render("e-commerce/paymentConfig");
};

cartCtl.finishSell = async (req, res) => {
  const { address } = req.body;
  if (productsCart.catalogueItems.length > 0) {
    for (const item of productsCart.catalogueItems) {
      await dataSource.getRepository(Request).save({
        total: item.price,
        created_At: new Date(),
        productId: item.id,
        address,
        paymentMethod: "efectivo-contra entrega",
        userId: 1,
      });
    }
    res.render("e-commerce/thanksForYourOrder");
  }
};

module.exports = cartCtl;
