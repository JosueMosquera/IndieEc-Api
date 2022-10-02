const express = require("express");
const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const ArtistCatalogue = require("../modelos/ArtistCatalogue").ArtistCatalogue;
const router = express.Router();
const artistCatalogueCtl = {};
const Product = require("../modelos/Product").Product;
const productsCart = {
  catalogueItems: [],
  total: 0,
};

artistCatalogueCtl.mostrarCatalogo = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await dataSource
      .getRepository(Product)
      .findOne({ where: { id: productId } });
    if (product) {
      // json data
//traer el artist id 
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
      res.render("e-commerce/productCategory", productsCart);
    } else {
      res.json({
        message: "no existe el producto que quiere agregar",
      });
    }
  } catch (error) {
    console.error(error);
  }
};




artistCatalogueCtl.crearCatalogo = async (req, res) => {
  try {
    const { artistId } = req.body;
    dataSource.getRepository(ArtistCatalogue).create(req.body);

    const results = await dataSource.getRepository(ArtistCatalogue).save({
      artistId,
    });
    return res.json({ msg: "catalogo creado", catalogue: results });
  } catch (error) {
    console.log(error);
  }
};

artistCatalogueCtl.borrarCatalogo = async (req, res) => {
  try {
    const results = await dataSource.getRepository(ArtistCatalogue).delete();
    return res.json({ msg: "catalogo eliminado", catalogue: results });
  } catch (error) {
    console.log(error);
  }
};

module.exports = artistCatalogueCtl;
