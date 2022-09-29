const express = require("express");
const { dataSource } = require("../dbConfig/appDataSource");
const Product = require("../models/Product").Product;
const router = express.Router();
const productCtl = {};
productCtl.findAll = async (req, res) => {
  try {
    const products = await dataSource.getRepository(Product).find();
    res.json(products);
  } catch (error) {
    console.log(error);
  }
};

productCtl.findOneProduct = async (req, res) => {
  try {
    const product = await dataSource
      .getRepository(Product)
      .findOne({ where: { id: req.params.id } });
    if (product) {
      res.render("e-commerce/productDetail", product);
    } else {
      res.json({
        message: "no existe el producto que estas buscando",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

productCtl.createProduct = async (req, res) => {
  try {
    const { name, code, description, price, stock, artistCatalogueId } =
      req.body;
    const newProduct = dataSource.getRepository(Product).create(req.body);
    await dataSource.getRepository(Product).save({
      name,
      code,
      description,
      price,
      stock,
      artistCatalogueId,
    });
    return res.json(newProduct);
  } catch (error) {
    console.log(error);
  }
};

productCtl.updateProduct = async (req, res) => {
  try {
    const { productId, name, code, price, stock, artistCatalogueId } = req.body;
    const findProduct = dataSource
      .getRepository(Product)
      .findOneBy({ id: productId });
    if (findProduct) {
      const updatedProduct = await dataSource.getRepository(Product).update(
        { id: productId },
        {
          name,
          code,
          price,
          stock,
          artistCatalogueId,
        }
      );
      res.json(updatedProduct);
    } else {
      console.log("no se encontro el producto por el id que ingreso");
    }
  } catch (error) {
    console.log(error);
  }
};

productCtl.deleteProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const findProduct = dataSource
      .getRepository(Product)
      .findOneBy({ id: productId });
    if (findProduct) {
      const deletedProduct = await dataSource
        .getRepository(Product)
        .delete({ id: productId });
      res.json(deletedProduct);
    } else {
      console.log("no se encontro el producto por el id que ingreso");
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = productCtl;
