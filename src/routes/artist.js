const express = require('express')
const { dataSource } = require('../dbConfig/appDataSource')
const Artist = require('../models/Artist').Artist
const bcrypt = require('bcrypt');
const saltRounds = 10;
const router = express.Router()
router.get('/artists',async(req,res)=>{
    try {
        const artists = await dataSource.getRepository(Artist).find()
        res.json(artists)
    } catch (error) {
        console.log(error)
    }
})
router.post('/artists',async(req,res)=>{
    try {
        const {user_name,song_date,password} = req.body
         dataSource.getRepository(Artist).create(req.body)
        
            const results = await dataSource.getRepository(Artist).save({        
            user_name,
            song_date,
            password,

        })
        return res.json(results)
    

    } catch (error) {
        console.log(error)
    }
})
module.exports=router