const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const User = require("../modelos/User").User;
const bcrypt = require("bcrypt");
const Artist = require("../modelos/Artist").Artist;
const ArtistCatalogue = require("../modelos/ArtistCatalogue").ArtistCatalogue;
const authCtl = {};
const availableCatalogues = {
  catalogues: [],
};
authCtl.showLogin = (req, res) => {
  res.render("auth/login");
};

authCtl.loggin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await dataSource.getRepository(User).findOne({
      where: {
        username: username,
      },
    });
    const correctPass = await bcrypt.compare(password, user.password);
    if (correctPass) {
      const artistCatalogue = await dataSource
        .getRepository(ArtistCatalogue)
        .find();
      if (artistCatalogue.length > 0) {
        artistCatalogue.forEach(async (catalogue) => {
          const artist = await dataSource
            .getRepository(Artist)
            .findOne({ where: { id: catalogue.artistId } });
          if (availableCatalogues.catalogues.length <= 1) {
            availableCatalogues.catalogues.push({
              name: artist.name,
              id: catalogue.id,
            });
          }

          res.render("e-commerce/listCatalogue", availableCatalogues);
        });
      } else {
        res.json({
          error: "contraseña incorrecta",
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
//TODO: funcionalidad en la vista
authCtl.logOut = async (req, res) => {
  res.json({
    logout: "Has cerrado Sesión",
  });
};
module.exports = authCtl;
