const express = require("express");
const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const ArtistMusic = require("../modelos/ArtistMusic").ArtistMusic;
const router = express.Router();
const artistMusicCtl = {};



artistMusicCtl.findAll = async (req, res) => {
  try {
    const musics = await dataSource.getRepository(ArtistMusic).find();
    res.render("Perfil/artistMusicCrear", musics);

  } catch (error) {
    console.log(error);
  }
  
};



artistMusicCtl.findOneMusic = async (req, res) => {
  try {
    const musics = await dataSource
      .getRepository(ArtistMusic)
      .findOne({ where: { id: req.params.id } });
    if (ArtistMusic) {
      res.render("Perfil/artistMusic", musics);
    } else {
      res.json({
        message: "no existe el producto que estas buscando",
      });
    }

  } catch (error) {
    console.log(error);
  }
};

artistMusicCtl.createMusic = async (req, res) => {
  try {
    const {artistId,link} =
      req.body;
    dataSource.getRepository(ArtistMusic).create(req.body);
    await dataSource.getRepository(ArtistMusic).save({
      artistId,
      link
      
    });
    return res.render("Perfil/artistMusic");
  } catch (error) {
    console.log(error);
  }
};

artistMusicCtl.updateMusic = async (req, res) => {
  try {
    const artistMusicId = req.params.id;
    const { artistId,link } = req.body;
    const findMusic = dataSource
      .getRepository(ArtistMusic)
      .findOneBy({ id: artistMusicId });
    if (findMusic) {
      const updatedMusic= await dataSource.getRepository(ArtistMusic).update(
        { id: artistMusicId },
        {
          artistId,
          link
          
        }
        
      );

      res.render("Perfil/artistMusic");
    } else {
  
      console.log("no se encontro el perfil");
    }
    
  } catch (error) {
    console.log(error);
  }

};

artistMusicCtl.deleteMusic = async (req, res) => {
  const artistMusicId = req.params.id;
  const parsedId = parseInt(artistMusicId)
  try {
    const artistMusicDeleted = await dataSource.getRepository(ArtistMusic).delete({id:parsedId});

    res.render("Perfil/artistMusicCrear");
    
  } catch (error) {
    
    console.log(error, "deleteMusic");
  }
};
module.exports = artistMusicCtl;
