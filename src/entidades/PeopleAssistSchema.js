const PeopleAssist = require("../modelos/PeopleAssist").PeopleAssist;

const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "PeopleAssist",
  target: PeopleAssist,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    
    answers: {
      type: "varchar",
      length: 255,
    },
    userId: {
      type: "int",
    },
  },
  relations: {
    user: {
      target: "User",
      type: "one-to-one",
      joinColumn: true,
      cascade: true,
    },
  },
});