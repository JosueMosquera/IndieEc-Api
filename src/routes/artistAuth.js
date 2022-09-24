const express = require('express')
const {
    dataSource
} = require('../dbConfig/appDataSource')
const Artist = require('../models/Artist').Artist
const router = express.Router()
const bcrypt = require('bcrypt');
router.post('/login/artist', async (req, res) => {
    const {
        email,
        password
    } = req.body
    try {
        const artist = await dataSource.getRepository(Artist).findOne({
            where: {
                email: email,
            }
        })
        const correctPass = await bcrypt.compare(password, artist.password)
        correctPass ? res.json({
            artist
        }) : res.json({
            error: 'contraseña incorrecta'
        })

    } catch (error) {
        console.log(error)
    }
})
//TODO: funcionalidad en la vista
router.post('/logout/artist', async (req, res) => {
    res.json({
        logout: "Has cerrado Sesión"
    })
})
module.exports = router