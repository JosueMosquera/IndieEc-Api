const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const Group = require("../models/Group").Group;
const groupsCtl = {};

groupsCtl.mostrarGrupos = async (req, res) => {
  try {
    const groups = await dataSource.getRepository(Group).find();
    res.json(groups);
  } catch (error) {
    console.log(error);
  }
};

groupsCtl.crearGrupo = async (req, res) => {
  try {
    const { nombre, descripcion, link_media } = req.body;
    dataSource.getRepository(Group).create(req.body);

    const results = await dataSource.getRepository(Group).save({
      nombre,
      descripcion,
      link_media,
    });
    return res.json(results);
  } catch (error) {
    console.log(error);
  }
};

module.exports = groupsCtl;
