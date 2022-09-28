const ArtistCatalogue = require("../models/ArtistCatalogue").ArtistCatalogue;

const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "artist_catalogue",
  tableName: "artist_catalogue",
  target: ArtistCatalogue,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    artistId: {
      type: "int",
    },
  },
  relations: {
    artist: {
      target: "Artist",
      type: "one-to-one",
      joinColumn: true,
      cascade: true,
    },
  },
});
