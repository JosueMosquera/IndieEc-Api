const ArtistProfile = require("../modelos/ArtistProfile").ArtistProfile;

const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "artist_profile",
  target: "artist_profile",
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

    },
    public_description: {
      type: "varchar",

    },
    public_url_social_media: {
      type: "varchar",

    },
  },
});