const ArtistProfile = require("../modelos/ArtistProfile").ArtistProfile;

const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "artist_profile",
  tableName: "artist_profile",
  target: ArtistProfile,
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
    public_name: {
      type: "varchar",
      length: 255,
    
    },
    public_description: {
      type: "varchar",
      length: 255,

    },
    public_url_social_media: {
      type: "varchar",
      length: 255,

    },
  },
  relations: {
    artist_id: {
      target: "ArtistProfile",
      type: "many-to-many",
      joinColumn: true,
      cascade: true,
    },
  }
});