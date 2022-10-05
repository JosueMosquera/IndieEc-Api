const express = require("express");
const cloudinary = require("cloudinary");
const cloudinaryCloud = cloudinary.v2;
cloudinaryCloud.config({
  cloud_name: "dzz16rbdb",
  api_key: "186842746161464",
  api_secret: "41d-ukG-vs87Pkb19nyLdZ4sH0c",
});
const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const Product = require("../modelos/Product").Product;
const productCtl = {};
const globalProducts = {
  adminProducts: [],
};
productCtl.findAll = async (req, res) => {
  try {
    const products = await dataSource
      .getRepository(Product)
      .find({ relations: ["artistCatalogue"] });
    const productsToView = products.map((product) => ({
      id: product.id,
      name: product.name,
      code: product.code,
      description: product.description,
      productImage: product.product_image,
      price: product.price,
      stock: product.stock,
      artistCatalogue: product.artistCatalogue.artistId,
    }));
    globalProducts.adminProducts = productsToView;

    res.render("e-commerce/products/productsAdmin", globalProducts);
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
  const productId = req.params.id;
  try {
    const { name, code, description, price, stock, artistCatalogueId } =
      req.body;
    const fileCloudinary = req.files?.image;
    const newProduct = dataSource.getRepository(Product).create(req.body);
    if (newProduct){
      await dataSource.getRepository(Product).save({
        name: name !== undefined ? name : newProduct.name,
          code: code !== undefined ? code : newProduct.code,
          description: description !== undefined ? description : newProduct.description,
          price: price !== undefined ? price : newProduct.price,
          stock: stock !== undefined ? stock : newProduct.stock,
          artistCatalogueId: artistCatalogueId !== undefined ? artistCatalogueId : newProduct.artistCatalogueId,
        }
      );
      if (fileCloudinary) {
        const { secure_url } = await cloudinaryCloud.uploader.upload(
          fileCloudinary?.tempFilePath
        );
        await dataSource.getRepository(Product).update(
          { id: productId },
          {
            product_image: secure_url,
          }
        );
      }
      res.render("home");
      return res.json(newProduct);
    }else {
      console.log("no se encontro el producto por el id que ingreso");
    }
    }
     catch (error) {
    console.log(error);
  }
};

productCtl.updateProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const { name, code, price, stock, artistCatalogueId, description } =
      req.body;
    const fileCloudinary = req.files?.image;
    const findProduct = await dataSource
      .getRepository(Product)
      .findOneBy({ id: productId });

    if (findProduct) {
      await dataSource.getRepository(Product).update(
        { id: productId },
        {
          name: name !== undefined ? name : findProduct.name,
          code: code !== undefined ? code : findProduct.code,
          description: description !== undefined ? description : findProduct.description,
          price: price !== undefined ? price : findProduct.price,
          stock: stock !== undefined ? stock : findProduct.stock,
          artistCatalogueId: artistCatalogueId !== undefined ? artistCatalogueId : findProduct.artistCatalogueId,
        }
      );
      if (fileCloudinary) {
        const { secure_url } = await cloudinaryCloud.uploader.upload(
          fileCloudinary?.tempFilePath
        );
        await dataSource.getRepository(Product).update(
          { id: productId },
          {
            product_image: secure_url,
          }
        );
      }
      res.render("home");
    } else {
      console.log("no se encontro el producto por el id que ingreso");
    }
  } catch (error) {
    console.log(error);
  }
};

productCtl.deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const findProduct = dataSource
      .getRepository(Product)
      .findOneBy({ id: productId });
    if (findProduct) {
      await dataSource.getRepository(Product).delete({ id: productId });
      res.render("home");
    } else {
      console.log("no se encontro el producto por el id que ingreso");
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = productCtl;
