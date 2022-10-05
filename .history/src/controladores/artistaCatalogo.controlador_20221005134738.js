const express = require("express");
const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const Artist = require("../modelos/Artist").Artist;
const ArtistCatalogue = require("../modelos/ArtistCatalogue").ArtistCatalogue;
const artistCatalogueCtl = {};
const Product = require("../modelos/Product").Product;
const productsCatalogue = {
  catalogueItems: [],
};
const availableCatalogues = {
  catalogues: [],
};

artistCatalogueCtl.mostrarCatalogo = async (req, res) => {
  const catalogueId = req.params.id;
  try {
    const catalogue = await dataSource
      .getRepository(ArtistCatalogue)
      .findOne({ where: { id: catalogueId } });
    if (catalogue) {
      const catalogueItems = await dataSource
        .getRepository(Product)
        .find({ where: { artistCatalogueId: catalogue.id } });
      const parsedItems = catalogueItems.map((item) => ({
        name: item.name,
        code: item.code,
        price: item.price,
        stock: item.stock,
        description: item.description,
        product_image: item.product_image,
        id: item.id,
      }));
      productsCatalogue.catalogueItems = parsedItems;
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
      .find({ relations: ["artist"] });
    if (artistCatalogue.length > 0) {
      const parsedCatalogues = artistCatalogue.map((catalogue) => ({
        name: catalogue.artist.name,
        id: catalogue.id,
      }));
      availableCatalogues.catalogues = parsedCatalogues;
      res.render("e-commerce/listCatalogue", availableCatalogues);
    } else {
      res.json({
        message: "no existe el catalogo que quiere agregar",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

artistCatalogueCtl.renderCatalogueRegisterView = async (req, res) => {
  res.render("e-commerce/createCatalogue");
};

artistCatalogueCtl.crearCatalogo = async (req, res) => {
  try {
    const { artistId } = req.body;
    dataSource.getRepository(ArtistCatalogue).create(req.body);

    const results = await dataSource.getRepository(ArtistCatalogue).save({
      artistId,
    });
    return res.render("e-commerce/listCatalogue");
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
