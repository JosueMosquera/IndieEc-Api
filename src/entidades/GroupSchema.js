const Group = require('../models/Group').Group

const EntitySchema = require('typeorm').EntitySchema

module.exports = new EntitySchema( {
    name:"Group",
    tableName:"Grupos_Artistas",
    target:Group,
    columns:{
        id:{
            primary:true,
            type:'int',
            generated:true
        },
        nombre:{
            type:"varchar",
        },
        descripcion:{
            type:"varchar",
        },
        link_media:{
            type:"text",
        },
        /*relations:{
            rols:{
                target:"Group",
                type:"many-to-many",
                joinTable:true,
                cascade:true
            }
         }*/
        
    }
})
