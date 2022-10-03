class ArtistProfile{
    constructor(id,artist_id,public_name,public_description,public_url_social_media){
        this.id = id,
        this.artist_id=artist_id,
        this.public_name=public_name,
        this.public_description=public_description,
        this.public_url_social_media = public_url_social_media
    }
}
module.exports={
    ArtistProfile:ArtistProfile,
};