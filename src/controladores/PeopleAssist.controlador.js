const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const PeopleAssist = require("../modelos/PeopleAssist").PeopleAssist;
const User = require("../modelos/User").User
const PeopleAssistCtl = {};
const saltRounds = 10;
PeopleAssistCtl.findAll = async (req, res) => {
    res.render("InstrumentPlay/PaRegister");
 };

 PeopleAssistCtl.mostrarPeopleAssist = async (req, res) => {
  try {
    const PeopleAssist = await dataSource.getRepository(PeopleAssist).find();
    res.json(PeopleAssists);
  } catch (error) {
    console.log(error);
  }
};

PeopleAssistCtl.crearPeopleAssist = async (req, res) => {
  try {
    const {
        username,
        answer

  } = req.body;
  console.log(username)
  const findUser = await dataSource.getRepository(User).findOne ({ where: { usermane } });
    dataSource.getRepository(PeopleAssist).create(req.body);
        const results = await dataSource.getRepository(PeopleAssist).save({
        answer,
        userId: findUser.id
  
});
return res.render("InstrumentPlay/graciasporvisitarnos");
  } catch (error) {
    console.log(error);
  }
};
PeopleAssistCtl.actualizar = async (req, res) => {
  try {
    const { username, questions, answers } = req.body;
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      const results = await dataSource.getRepository(PeopleAssist).update({
        answer,
        userId: findUser.id
      });
      return res.json(results);
    });
  } catch (error) {
    console.log(error);
  }
};

PeopleAssistCtl.borrar = async (req, res) => {
  const { id } = req.body;
  try {
    const PeopleAssistDeleted = dataSource.getRepository(PeopleAssist).delete({
      where: {
        id: id
      }
    });
    res.json({
      PeopleAssistDeleted
    });
  } catch (error) {
    console.log(error, "deletePeopleAssist");
  }
};
module.exports = PeopleAssistCtl;
