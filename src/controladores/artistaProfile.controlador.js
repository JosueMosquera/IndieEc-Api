const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const ArtistProfile = require("../modelos/ArtistProfile").ArtistProfile;
const bcrypt = require("bcrypt");
const artistProfileCtl = {};
const saltRounds = 10;

artistProfileCtl.renderArtistProfileRegisterView = async (req, res) => {
  res.render("artistProfileRegister");
};

artistProfileCtl.viewProfiles = async (req, res) => {
  try {
    const profiles = await dataSource.getRepository(ArtistProfile).find();
    res.json(profiles);
  } catch (error) {
    console.log(error);
  }
};

artistProfileCtl.createProfile = async (req, res) => {
  try {
    const {
        public_name,
        public_description,
        public_url_social_media,
    } = req.body;
    dataSource.getRepository(ArtistProfile).create(req.body);
    bcrypt.hash( async (err, hash) => {
      const results = await dataSource.getRepository(ArtistProfile).save({
        public_name,
        public_description,
        public_url_social_media,
      });
      return res.render("Perfil Creado");
    });
  } catch (error) {
    console.log(error);
  }
};

artistProfileCtl.update = async (req, res) => {
  try {
    const {
        public_name,
        public_description,
        public_url_social_media,
    } = req.body;
    bcrypt.hash( async (err, hash) => {
      const results = await dataSource.getRepository(ArtistProfile).update({
        public_name,
        public_description,
        public_url_social_media,
      });
      return res.json(results);
    });
  } catch (error) {
    console.log(error);
  }
};

artistProfileCtl.delete = async (req, res) => {
  const { profileId } = req.body;
  try {
    const profileDeleted = dataSource.getRepository(ArtistProfile).delete({
      where: {
        id: profileId,
      },
    });
    res.json({
      profileDeleted,
    });
  } catch (error) {
    console.log(error, "deleteProfile");
  }
};
module.exports = artistProfileCtl;