const express = require('express')
const {
    dataSource
} = require('../dbConfig/appDataSource')
const Artist = require('../models/Artist').Artist
const bcrypt = require('bcrypt');
const saltRounds = 10;
const router = express.Router()
router.get('/artists/register',(req,res)=>{
    res.render('artistsRegister')
})
router.get('/artists', async (req, res) => {
    try {
        const artists = await dataSource.getRepository(Artist).find()
        res.json(artists)
    } catch (error) {
        console.log(error)
    }
})
router.post('/artists', async (req, res) => {
    try {
        const {
            username,
            email,
            password,
            name,
            last_name,
            artist_name,
            gender_music,
            birth_place,
            description
        } = req.body
        dataSource.getRepository(Artist).create(req.body)
        bcrypt.hash(password, saltRounds, async (err, hash) => {
            const results = await dataSource.getRepository(Artist).save({
                username,
                email,
                password: hash,
                name,
                last_name,
                artist_name,
                gender_music,
                birth_place,
                description,


            })
            return res.render('thanksForRegister')
        })
    } catch (error) {
        console.log(error)
    }

})
router.put('/artists', async (req, res) => {
    try {
        const {
            username,
            email,
            password,
            name,
            last_name,
            artist_name,
            gender_music,
            birth_place,
            description
        } = req.body
        bcrypt.hash(password, saltRounds, async (err, hash) => {
            const results = await dataSource.getRepository(Artist).update({
                username,
                email,
                password: hash,
                name,
                last_name,
                artist_name,
                gender_music,
                birth_place,
                description,


            })
            return res.json(results)
        })
    } catch (error) {
        console.log(error)
    }
})
router.delete('/artists', async (req, res) => {
    const {
        artistId
    } = req.body
    try {
        const artistDeleted = dataSource.getRepository(Artist).delete({
            where: {
                id: artistId
            }
        })
        res.json({
            artistDeleted
        })
    } catch (error) {
        console.log(error, 'deleteArtist')
    }
})
module.exports = router