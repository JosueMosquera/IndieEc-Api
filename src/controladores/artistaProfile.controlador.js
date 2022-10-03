const express = require("express");
const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const ArtistProfile = require("../modelos/ArtistProfile").ArtistProfile;
const router = express.Router();
const artistProfileCtl = {};



artistProfileCtl.findAll = async (req, res) => {
  try {
    const profile = await dataSource.getRepository(ArtistProfile).find();
    res.render("Perfil/artistProfileCrear", profile);

  } catch (error) {
    console.log(error);
  }
  
};



artistProfileCtl.findOneProfile = async (req, res) => {
  try {
    const profile = await dataSource
      .getRepository(ArtistProfile)
      .findOne({ where: { id: req.params.id } });
    if (ArtistProfile) {
      res.render("Perfil/artistProfile", profile);
    } else {
      res.json({
        message: "no existe el perfil que estas buscando",
      });
    }

  } catch (error) {
    console.log(error);
  }
};

artistProfileCtl.createProfile = async (req, res) => {
  try {
    const {artist_id,public_name,public_description,public_url_social_media} =
      req.body;
    dataSource.getRepository(ArtistProfile).create(req.body);
    await dataSource.getRepository(ArtistProfile).save({
      artist_id,
      public_name,
      public_description,
      public_url_social_media,
    });
    return res.render("Perfil/artistProfileCrear");
  } catch (error) {
    console.log(error);
  }
};

artistProfileCtl.updateProfile = async (req, res) => {
  try {
    const artistProfileId = req.params.id;
    const { artist_id,public_name,public_description,public_url_social_media } = req.body;
    const findProfile = dataSource
      .getRepository(ArtistProfile)
      .findOneBy({ id: artistProfileId });
    if (findProfile) {
      const updatedProfile= await dataSource.getRepository(ArtistProfile).update(
        { id: artistProfileId },
        {
          artist_id,
          public_name,
          public_description,
          public_url_social_media
        }
        
      );

      res.render("Perfil/artistProfile");
    } else {
  
      console.log("no se encontro el perfil");
    }
    
  } catch (error) {
    console.log(error);
  }

};

artistProfileCtl.deleteProfile = async (req, res) => {
  const artistProfileId = req.params.id;
  const parsedId = parseInt(artistProfileId)
  try {
    const artistProfileDeleted = await dataSource.getRepository(ArtistProfile).delete({id:parsedId});

    res.render("Perfil/artistProfileCrear");
    
  } catch (error) {
    
    console.log(error, "deleteProfile");
  }
};
module.exports = artistProfileCtl;
