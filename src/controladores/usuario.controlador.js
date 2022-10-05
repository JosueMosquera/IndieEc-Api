const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const User = require("../modelos/User").User;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const userCtl = {};
userCtl.renderHome = (req, res) => {
  res.render("home");
};

userCtl.getUsers = async (req, res) => {
  try {
    const users = await dataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

userCtl.getRegister = (req, res) => {
  res.render("auth/register");
};

userCtl.renderAdminHome = (req, res) => {
  res.render("adminHome");
};

userCtl.createUser = async (req, res) => {
  try {
    const { username, password, email, rols } = req.body;
    dataSource.getRepository(User).create(req.body);
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      await dataSource.getRepository(User).save({
        username,
        email,
        rols,
        password: hash,
      });
      return res.render("auth/login");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = userCtl;
