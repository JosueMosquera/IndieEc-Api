class Artist{
    contructor(id,username,password,email,name,last_name,artist_name,birth_place,description){
        this.id = id,
        this.username=username,
        this.password=password,
        this.email=email
        this.name = name,
        this.last_name = last_name,
        this.artist_name = artist_name,
        this.birth_place = birth_place,
        this.description = description
    }
}
module.exports={
    Artist:Artist
}