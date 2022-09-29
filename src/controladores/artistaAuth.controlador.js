const { dataSource } = require("../dbConfig/appDataSource");
const Artist = require("../models/Artist").Artist;
const bcrypt = require("bcrypt");
const artistAuthCtl = {};

artistAuthCtl.loggin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const artist = await dataSource.getRepository(Artist).findOne({
      where: {
        email: email,
      },
    });
    const correctPass = await bcrypt.compare(password, artist.password);
    correctPass
      ? res.json({
          artist,
        })
      : res.json({
          error: "contraseña incorrecta",
        });
  } catch (error) {
    console.log(error);
  }
};

//TODO: funcionalidad en la vista
artistAuthCtl.logOut = async (req, res) => {
  res.json({
    logout: "Has cerrado Sesión",
  });
};

module.exports = artistAuthCtl;
