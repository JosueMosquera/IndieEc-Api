const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const InstrumentPlay = require("../modelos/InstrumentPlay").InstrumentPlay;
const User = require("../modelos/User").User
const InstrumentPlayCtl = {};
const saltRounds = 10;

InstrumentPlayCtl.renderInstrumentPlayView = async (req, res) => {
    res.render("InstrumentPlay/IpRegister");
 };

 InstrumentPlayCtl.mostrarInstrumentPlay = async (req, res) => {
  try {
    const InstrumentPlay = await dataSource.getRepository(InstrumentPlay).find();
    res.json(InstrumentPlays);
  } catch (error) {
    console.log(error);
  }
};

InstrumentPlayCtl.crearInstrumentPlay = async (req, res) => {
  try {
    const {
        username,
        answer

  } = req.body;
  console.log(username)
  const findUser = await dataSource.getRepository(User).findOne ({ where: { usermane } });
    dataSource.getRepository(InstrumentPlay).create(req.body);
        const results = await dataSource.getRepository(InstrumentPlay).save({
        answer,
        userId: findUser.id
  
});
return res.render("InstrumentPlay/graciasporvisitarnos");
  } catch (error) {
    console.log(error);
  }
};
InstrumentPlayCtl.actualizar = async (req, res) => {
  try {
    const { username, questions, answers } = req.body;
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      const results = await dataSource.getRepository(InstrumentPlay).update({
        answer,
        userId: findUser.id
      });
      return res.json(results);
    });
  } catch (error) {
    console.log(error);
  }
};

InstrumentPlayCtl.borrar = async (req, res) => {
  const { id } = req.body;
  try {
    const InstrumentPlayDeleted = dataSource.getRepository(InstrumentPlay).delete({
      where: {
        id: id
      }
    });
    res.json({
      InstrumentPlayDeleted
    });
  } catch (error) {
    console.log(error, "deleteInstrumentPlay");
  }
};
module.exports = InstrumentPlayCtl;
