const ArtistImages = require("../modelos/ArtistImages").ArtistImages;

const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "artistImages",
  target: "artistImages",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    artist_id: {
      type: "int",
      unique: true,
    },
    picture: {
      type: "blob",

    },
  },
});