const express = require("express");
const cors = require("cors");
const userRouter = require("../routes/user");
const authRouter = require('../routes/auth')
const artistRouter = require('../routes/artist')
const { connectDb } = require("../dbConfig/dbConnection");
const fileUpload = require('express-fileupload');
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.APP_PORT;
    this.paths = {
      usersPath: "/",
      authPath:"/auth",
      artistPath: "/"
    };
    this.conectarDb();
    this.app.use(cors());
   /*  this.app.set('view engine','ejs') */
    //Parseo y lectura del body
    this.app.use(express.json());
    this.middlewares();
    //rutas de la app
    this.routes();
  }
  async conectarDb() {
    await connectDb();
  }
  routes() {
    this.app.use(this.paths.usersPath, userRouter);
    this.app.use(this.paths.authPath, authRouter);
    this.app.use(this.paths.artistPath, artistRouter);

  }
  listen(){
      this.app.listen(this.port)
  }
  middlewares(){
      this.app.use(express.static("public"));
      this.app.use(fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp/",
        createParentPath:true
      }))
  }
}
module.exports=Server;
