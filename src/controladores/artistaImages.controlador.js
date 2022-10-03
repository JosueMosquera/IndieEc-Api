const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const ArtistImages = require("../modelos/ArtistImages").ArtistImages;
const bcrypt = require("bcrypt");
const artistImagesCtl = {};
const saltRounds = 10;

artistImagesCtl.renderArtistImagesRegisterView = async (req, res) => {
  res.render("artistsImagesRegister");
};

artistImagesCtl.viewImages = async (req, res) => {
  try {
    const images = await dataSource.getRepository(images).find();
    res.json(images);
  } catch (error) {
    console.log(error);
  }
};

artistImagesCtl.createImage = async (req, res) => {
  try {
    const {
      user,
      picture,

    } = req.body;
    dataSource.getRepository(ArtistImages).create(req.body);
    bcrypt.hash(async (err, hash) => {
      const results = await dataSource.getRepository(ArtistImages).save({
        user,
        picture,
      });
      return res.render("Imagen Creada");
    });
  } catch (error) {
    console.log(error);
  }
};

artistImagesCtl.update = async (req, res) => {
  try {
    const {
        user,
        picture,
    } = req.body;
    bcrypt.hash( async (err, hash) => {
      const results = await dataSource.getRepository(ArtistImages).update({
        user,
        picture,
      });
      return res.json(results);
    });
  } catch (error) {
    console.log(error);
  }
};

artistImagesCtl.delete = async (req, res) => {
  const { imagesId } = req.body;
  try {
    const imagesDeleted = dataSource.getRepository(ArtistImages).delete({
      where: {
        id: imagesId,
      },
    });
    res.json({
      ImagesDeleted,
    });
  } catch (error) {
    console.log(error, "deleteImages");
  }
};
module.exports = artistImagesCtl;
