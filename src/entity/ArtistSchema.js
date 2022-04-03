const Artist = require('../models/Artist').Artist

const EntitySchema = require('typeorm').EntitySchema

module.exports = new EntitySchema( {
    name:"Artist",
    target:Artist,
    columns:{
        id:{
            primary:true,
            type:'int',
            generated:true
        },
        user_name:{
            type:"varchar",
        },
        song_date:{
            type:"date",
        }

    }
})
