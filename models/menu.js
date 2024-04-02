const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },taste:{
        type:String,
        required:true,
        enum:['sweet','sour','spicy']
    }
})

const MenuItems = mongoose.model('MenuItems',menuSchema)

module.exports=MenuItems