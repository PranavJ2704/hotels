const express = require('express')
const app = express()
const db = require('./db')

const bodyparser = require('body-parser')
app.use(bodyparser.json())



app.get('/',(req,res) => {
    res.send("<h1>This is home page.</h1>")
})


const personRoute = require('./routes/personRoutes')
const menuRoute = require('./routes/menuRouter')


app.use('/person',personRoute)
app.use(('/menu',menuRoute))

app.listen(3000,() => {
    console.log("Connected to server")
})