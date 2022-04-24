

const typeorm = require('typeorm')

const dataSource = new typeorm.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.DATABASEUSER,
    database: process.env.DATABASENAME,
    synchronize: true,
    logging:false,
    entities:[require('../entity/UserSchema'),require('../entity/RoleSchema'),require('../entity/ArtistSchema')]
})
dataSource.initialize()
module.exports={
     dataSource
}