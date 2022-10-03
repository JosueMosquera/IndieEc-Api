const ArtistMusic = require("../modelos/ArtistMusic").ArtistMusic;

const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "artist_music",
  tableName : "artist_music",
  target: ArtistMusic,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    artistId: {
      type: "int",
    },
    link:{
        type: "varchar",
        length: 2500,
    }
  },
  relations: {
    artistId: {
      target: "ArtistMusic",
      type: "many-to-many",
      joinColumn: true,
      cascade: true,
    },
  },
});