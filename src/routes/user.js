const express = require('express')
const { dataSource } = require('../dbConfig/appDataSource')
const User = require('../models/User').User
const bcrypt = require('bcrypt');
const saltRounds = 10;
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('home')
})

router.get('/users',async(req,res)=>{
    try {
        const users = await dataSource.getRepository(User).find()
        res.json(users)
    } catch (error) {
        console.log(error)
    }
})
router.post('/users',async(req,res)=>{
    try {
        const {username,password,email,rols} = req.body
         dataSource.getRepository(User).create(req.body)
        bcrypt.hash(password,saltRounds,async(err,hash)=>{
            const results = await dataSource.getRepository(User).save({        
            username,
            email,
            rols,
            password:hash,
        })
        return res.json({msg:'usuario creado',usuario:results})
    })

    } catch (error) {
        console.log(error)
    }
})
module.exports=router