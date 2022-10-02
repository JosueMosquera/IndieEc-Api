const express = require("express");
const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const ArtistMusic = require("../modelos/ArtistMusic").ArtistMusic;
const router = express.Router();
const artistMusicCtl = {};



artistMusicCtl.findAll = async (req, res) => {
  try {
    const musics = await dataSource.getRepository(ArtistMusic).find();
    //res.render("Perfil/perfil", musics);
    res.json(musics);
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
      res.render("Perfil/perfil", musics);
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
    const newMusic = dataSource.getRepository(ArtistMusic).create(req.body);
    await dataSource.getRepository(ArtistMusic).save({
      artistId,
      link
      
    });
    return res.render("artistMusic");
  } catch (error) {
    console.log(error);
  }
};

artistMusicCtl.updateMusic = async (req, res) => {
  try {
    const { artistMusicId, artistId,link } = req.body;
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
      res.json(updatedMusic);
    } else {
      console.log("no se encontro el producto por el id que ingreso");
    }
  } catch (error) {
    console.log(error);
  }
};

artistMusicCtl.deleteMusic = async (req, res) => {
  const { artistMusicId } = req.body;
  try {
    const artistMusicDeleted = dataSource.getRepository(ArtistMusic).delete({
      
      where: {
        id: artistMusicId,
      },
    });
    res.json({
      artistMusicDeleted,
    });
    
  } catch (error) {
    
    console.log(error, "deleteArtist");
  }
};
module.exports = artistMusicCtl;
