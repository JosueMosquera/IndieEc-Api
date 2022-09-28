const Request = require("../models/Request").Request;

const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "requests",
  tableName: "requests",
  target: Request,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    total: {
      type: "float",
    },
    created_At: {
      type: "date",
    },
    address: {
      type: "varchar",
    },
    productId: {
      type: "int",
    },
    userId: {
      type: "int",
    },
  },
  relations: {
    product: {
      target: "Product",
      type: "many-to-one",
      joinColumn: true,
      cascade: true,
    },
    user: {
      target: "User",
      type: "many-to-one",
      joinColumn: true,
      cascade: true,
    },
  },
});
