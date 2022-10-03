const Product = require("../modelos/Product").Product;

const EntitySchema = require("typeorm").EntitySchema;
item
module.exports = new EntitySchema({
  name: "Product",
  target: Product,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
      length: 255,
    },
    code: {
      type: "varchar",
      length: 255,
    },
    description: {
      type: "varchar",
      length: 2500,
    },
    price: {
      type: "float",
    },
    stock: {
      type: "int",
    },
    product_image: {
      type: "varchar",
    },
    artistCatalogueId: {
      type: "int",
    },
  },
  relations: {
    artistCatalogue: {
      target: "ArtistCatalogue",
      type: "many-to-one",
      joinColumn: true,
      cascade: true,
    },
  },
});
