const ArtistImages = require("../modelos/ArtistImages").ArtistImages;

const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "artist_images",
  tableName:"artist_images",
  target: ArtistImages,
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
  relations: {
    artist_id: {
      target: "ArtistImages",
      type: "many-to-many",
      joinColumn: true,
      cascade: true,
    },
  }
});