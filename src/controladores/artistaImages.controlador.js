const express = require("express");
const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const ArtistImages = require("../modelos/ArtistImages").ArtistImages;
const router = express.Router();
const artistImagesCtl = {};



artistImagesCtl.findAll = async (req, res) => {
  try {
    const images = await dataSource.getRepository(ArtistImages).find();
    res.render("Perfil/artistImagesCrear", images);

  } catch (error) {
    console.log(error);
  }
  
};



artistImagesCtl.findOneImages = async (req, res) => {
  try {
    const images = await dataSource
      .getRepository(ArtistImages)
      .findOne({ where: { id: req.params.id } });
    if (ArtistImages) {
      res.render("Perfil/artistImages", images);
    } else {
      res.json({
        message: "no existe la imagen que estas buscando",
      });
    }

  } catch (error) {
    console.log(error);
  }
};

artistImagesCtl.createImages = async (req, res) => {
  try {
    const {artist_id,picture} =
      req.body;
    dataSource.getRepository(ArtistImages).create(req.body);
    await dataSource.getRepository(ArtistImages).save({
      artist_id,
      picture
    });
    return res.render("Perfil/artistImagesCrear");
  } catch (error) {
    console.log(error);
  }
};

artistImagesCtl.updateImages = async (req, res) => {
  try {
    const artistImagesId = req.params.id;
    const { artist_id,picture} = req.body;
    const findImages = dataSource
      .getRepository(ArtistImages)
      .findOneBy({ id: artistImagesId });
    if (findImages) {
      const updatedImages= await dataSource.getRepository(ArtistImages).update(
        { id: artistImagesId },
        {
          artist_id,
          picture
        }
        
      );

      res.render("Perfil/artistImages");
    } else {
  
      console.log("no se encontro la imagen");
    }
    
  } catch (error) {
    console.log(error);
  }

};

artistImagesCtl.deleteImages = async (req, res) => {
  const artistImagesId = req.params.id;
  const parsedId = parseInt(artistImagesId)
  try {
    const artistImagesDeleted = await dataSource.getRepository(ArtistImages).delete({id:parsedId});

    res.render("Perfil/artistImagesCrear");
    
  } catch (error) {
    
    console.log(error, "deleteImages");
  }
};
module.exports = artistImagesCtl;
