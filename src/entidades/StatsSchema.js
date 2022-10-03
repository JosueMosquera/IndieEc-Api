const Stats = require("../modelos/Stats").Stats;

const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "artist_stats",
  tableName : "artist_stats",
  target: Stats,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    artistId: {
      type: "int",
    },
    month_listeners:{
        type: "varchar",
        length: 2500,
    },
    day_play_songs:{
        type: "varchar",
        length: 2500,
    },
    year_followers:{
        type: "varchar",
        length: 2500,
    },
  },
  relations: {
    artistId: {
      target: "Stats",
      type: "many-to-many",
      joinColumn: true,
      cascade: true,
    },
  },
});