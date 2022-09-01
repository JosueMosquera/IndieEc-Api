const ArtistCatalogue = require('../models/ArtistCatalogue').ArtistCatalogue

const EntitySchema = require('typeorm').EntitySchema

module.exports = new EntitySchema({
    name: "Artist_Catalogue",
    tableName: 'Artist_Catalogue',
    target: ArtistCatalogue,
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        artistId: {
            type: 'int'
        }
    },
    //TODO: relation to artist fk
    relations: {
        artist: {
            target: "Artist",
            type: 'one-to-one',
            joinColumn: true,
            cascade: true,
        }
    }
})