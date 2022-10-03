const express = require("express");
const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const Artist = require("../modelos/Artist");
const ArtistCatalogue = require("../modelos/ArtistCatalogue").ArtistCatalogue;
const router = express.Router();
const artistCatalogueCtl = {};
const Product = require("../modelos/Product").Product;
const availableCatalogues = {
  catalogueItems: [],
};

artistCatalogueCtl.renderListCatalogueView = async (req, res) => {
  res.render("e-commerce/listCatalogue");
};

artistCatalogueCtl.mostrarCatalogo = async (req, res) => {
  const catalogueId = req.params.id;
  try {
    const catalogue = await dataSource
      .getRepository(ArtistCatalogue)
      .findOne({ where: { id: catalogueId } });
    if (catalogue) {
      const catalogueItems = await dataSource.getRepository(Product).find({ where: { artistCatalogueId: catalogue.id } })
      const parsedItems = catalogueItems.map(item => ({

        name: item.name,
        code: item.code,
        price: item.price,
        stock: item.stock,
        id: item.id,
      }))
      productsCatalogue.catalogueItems = parsedItems
      res.render("e-commerce/productCategory", productsCatalogue);
    } else {
      res.json({
        message: "no existe el producto que quiere agregar",
      });
    }
  } catch (error) {
    console.error(error);
  }
};


artistCatalogueCtl.mostrarArtistasCatalogo = async (req, res) => {
  
  try {
    const artistCatalogue = await dataSource
      .getRepository(ArtistCatalogue)
      .find();
    if (artistCatalogue.length > 0) {
      artistCatalogue.forEach(async(catalogue) => {
        const artistCatalogues = await dataSource.getRepository(Artist).find({ where: { id: catalogue.artistId } })
      const parsedItems = artistCatalogues.map(item => ({
        name: item.name,
      }))
      productsCatalogue.catalogueItems = parsedItems
      res.render("e-commerce/productCategory", productsCatalogue);
      });
      
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
