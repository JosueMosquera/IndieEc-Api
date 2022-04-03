const Role = require("./Role")

class Artist{
    contructor(id,user_name,password,song_date){
        this.id = id,
        this.user_name = user_name,
        this.passwrod = password,
        this.song_date = song_date
    }
}
module.exports={
    Role:Role
}