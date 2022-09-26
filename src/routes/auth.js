const express = require('express')
const {dataSource} = require('../dbConfig/appDataSource')
const User = require('../models/User').User
const router = express.Router()
const bcrypt = require('bcrypt');
router.post('/login',async(req,res)=>{
    const {username,password} = req.body
    try {
        const user = await dataSource.getRepository(User).findOne({where:{
            username:username,
        }})
        const correctPass = await bcrypt.compare(password,user.password)
        correctPass ?   res.json({
            user
        }): res.json({
            error:'contraseña incorrecta'
        })
      
    } catch (error) {
        console.log(error)
    }
})
//TODO: funcionalidad en la vista
router.post('logout',async(req,res)=>{
    res.json({
        logout:"Has cerrado Sesión"
    })
})
module.exports=router