const express = require('express')
const router = express.Router()

const Menu = require('../models/menu')

router.post('/',async(req,res)=>{
    try{
        const data = req.body

    const newMenu = new Menu(data)

    const response = await newMenu.save()

    console.log("Menu data is saved.")
    res.status(200).json(response)
    }
    catch(err){
        console.log("Error is occured :",err)
    }

})



router.get('/',async(req,res) =>{
    try{
        const data = await Menu.find()
        console.log("Data fetched.")
        res.status(200).json(data)
    }catch(err){
        console.log("Error occured:",err)
        res.status(500).json({error:"Internel error"})
    }
})

module.exports = router