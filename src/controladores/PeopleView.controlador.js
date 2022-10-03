const express = require("express");
const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const PeopleView = require("../modelos/PeopleView").PeopleView;
const router = express.Router();
const PeopleViewCtl = {};
PeopleViewCtl.findAll = async (req, res) => {
    res.render("PeopleView/PeopleViewRegister");
 };
 PeopleViewCtl.mostrarPeopleView = async (req, res) => {
  try {
    const PeopleView = await dataSource.getRepository(PeopleView).find();
    res.json(PeopleView);
  } catch (error) {
    console.log(error);
  }
};

PeopleViewCtl.crearPeopleView = async (req, res) => {
  try {
    const {
        username,
        questions,
        answers,

  } = req.body;
  const findUser = await dataSource.getRepository(User).findOne ({ where: { usermane } });
    dataSource.getRepository(PeopleView).create(req.body);
    bcrypt.hash(password, saltRounds, async (err, hash) => {
        const results = await dataSource.getRepository(PeopleView).save({
        username,
        questions,
        answers,
    });
    return res.render("Gracias por tu visita");
});
  } catch (error) {
    console.log(error);
  }
  module.exports = PeopleViewCtl;
};