
class User {
    constructor(id,username,email,password,rols){
        this.id = id,
        this.username=username,
        this.email=email
        this.password=password
        this.rols=rols
    }
}
module.exports={
    User:User
}