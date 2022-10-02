const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const User = require("../modelos/User").User;
const bcrypt = require("bcrypt");
const authCtl = {};

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
    correctPass
      ? res.json({
          user,
        })
      : res.json({
          error: "contraseña incorrecta",
        });
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
