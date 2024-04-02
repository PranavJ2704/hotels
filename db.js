const mongoose = require('mongoose')

//Connection

const mongooseURL = 'mongodb://0.0.0.0/hotels'

mongoose.connect(mongooseURL)

const db = mongoose.connection

db.on('connected',( )=>{
console.log("Connected to mongodb.")
})

db.on('error',(err) => {
    console.log("Error occured :",err)
})

db.on('disconnected',()=>{
    console.log('Connection is disconnected.')
}) 

module.exports = db;