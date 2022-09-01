

const User = require('../models/User').User

const EntitySchema = require('typeorm').EntitySchema

module.exports = new EntitySchema({
    name: "User",
    tableName: "users",
    target: User,
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        username: {
            type: "varchar",
            unique: true
        },
        email: {
            type: "varchar",
            unique: true

        },
        password: {
            type: "varchar"
        }
    },
    relations: {
        rols: {
            target: "Role",
            type: "many-to-many",
            cascade: true
        }
    }
})
