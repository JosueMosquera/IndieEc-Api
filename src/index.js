const dotenv = require('dotenv');
dotenv.config()//config del env
const Server = require('./models/Server')
const server= new Server()
server.listen();