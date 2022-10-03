const ArtistVideo = require("../modelos/ArtistVideo").ArtistVideo;

const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "artist_video",
  tableName : "artist_video",
  target: ArtistVideo,
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
      target: "ArtistVideo",
      type: "many-to-many",
      joinColumn: true,
      cascade: true,
    },
  },
});