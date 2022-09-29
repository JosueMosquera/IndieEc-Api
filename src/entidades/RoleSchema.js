const Role = require("../modelos/Role").Role;

const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Role",
  target: Role,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
  },
});
