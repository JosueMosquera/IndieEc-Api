const express = require('express')
const { dataSource } = require('../dbConfig/appDataSource')
const ArtistCatalogue = require('../models/ArtistCatalogue').ArtistCatalogue
const router = express.Router()

router.get('/artists-catalogue', async (req, res) => {
    try {
        const catalogues = await dataSource.getRepository(ArtistCatalogue).find()
        res.json(catalogues)
    } catch (error) {
        console.log(error)
    }
})
router.post('/create-artist-catalogue', async (req, res) => {
    try {
        const { artistId } = req.body
        dataSource.getRepository(ArtistCatalogue).create(req.body)

        const results = await dataSource.getRepository(ArtistCatalogue).save({
            artistId
        })
        return res.json({ msg: 'catalogo creado', catalogue: results })


    } catch (error) {
        console.log(error)
    }
})
router.delete('/delete-artist-catalogue', async (req, res) => {
    try {

        const results = await dataSource.getRepository(ArtistCatalogue).delete()
        return res.json({ msg: 'catalogo eliminado', catalogue: results })


    } catch (error) {
        console.log(error)
    }
})
module.exports = router