const express = require("express");
const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const ArtistVideo= require("../modelos/ArtistVideo").ArtistVideo;
const router = express.Router();
const artistVideoCtl = {};



artistVideoCtl.findAll = async (req, res) => {
  try {
    const videos = await dataSource.getRepository(ArtistVideo).find();
    res.render("Perfil/artistVideoCrear", videos)
    
  } catch (error) {
    console.log(error);
  }
  
};



artistVideoCtl.findOneVideo = async (req, res) => {
  try {
    const videos = await dataSource
      .getRepository(ArtistVideo)
      .findOne({ where: { id: req.params.id } });
    if (ArtistVideo) {
      res.render("Perfil/artistVideo", videos);
    } else {
      res.json({
        message: "no existe el perfil",
      });
    }

  } catch (error) {
    console.log(error);
  }
};

artistVideoCtl.createVideo = async (req, res) => {
  try {
    const {artistId,link} =
      req.body;
   dataSource.getRepository(ArtistVideo).create(req.body);
    await dataSource.getRepository(ArtistVideo).save({
      artistId,
      link
      
    });
    return res.render("Perfil/artistVideoCrear");
  } catch (error) {
    console.log(error);
  }
};

artistVideoCtl.updateVideo = async (req, res) => {
  try {
    const artistVideoId = req.params.id;
    const { artistId,link } = req.body;
    const findVideo = dataSource
      .getRepository(ArtistVideo)
      .findOneBy({ id: artistVideoId });
    if (findVideo) {
      const updatedVideo= await dataSource.getRepository(ArtistVideo).update(
        { id: artistVideoId },
        {
          artistId,
          link
          
        }
        
      );

      res.render("Perfil/artistVideo");
    } else {
  
      console.log("no se encontro el perfil");
    }
    
  } catch (error) {
    console.log(error);
  }

};

artistVideoCtl.deleteVideo = async (req, res) => {
    const artistVideoId = req.params.id;
    const parsedId = parseInt(artistVideoId)
    try {
      const artistVideoDeleted = await dataSource.getRepository(ArtistVideo).delete({id:parsedId});
  
      res.render("Perfil/artistVideoCrear");
      
    } catch (error) {
      
      console.log(error, "deleteVideo");
    }
  };
module.exports = artistVideoCtl;
