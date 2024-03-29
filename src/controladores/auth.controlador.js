const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const User = require("../modelos/User").User;
const bcrypt = require("bcrypt");
const Artist = require("../modelos/Artist").Artist;
const ArtistCatalogue = require("../modelos/ArtistCatalogue").ArtistCatalogue;
const authCtl = {};
const availableCatalogues = {
  catalogues: [],
  userId: 0,
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
        .find({ relations: ["artist"] });
      if (artistCatalogue.length > 0) {
        const parsedCatalogues = artistCatalogue.map((catalogue) => ({
          name: catalogue.artist.name,
          id: catalogue.id,
        }));
        availableCatalogues.catalogues = parsedCatalogues;
        availableCatalogues.userId = user.id;
        res.render("e-commerce/listCatalogue", availableCatalogues);
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
  res.render("auth/login");
};
module.exports = authCtl;
