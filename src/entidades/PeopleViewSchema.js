const PeopleView = require("../modelos/PeopleView").PeopleView;

const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "PeopleView",
  target: PeopleView,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    questions: {
      type: "varchar",
      length: 255,
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