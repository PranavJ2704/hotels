const express = require('express')
const router = express.Router()
const Person = require('../models/persons')

router.post('/',async (req,res) => {
    try{
        const data = req.body

        const per = new Person(data)

        const response = await per.save()

        console.log("data is saved successfully")
        res.status(200).json(response)
    }
    catch(err){
        console.log("error is occuerd at persone",err)
        res.status(500).json({err:'Internel error'})
    }

})

router.get('/',async (req,res) => {
    try{
        const data =await Person.find()
        console.log("Data fetched")
        res.status(200).json(data)

    }
    catch(err){
        console.log("Error occured",err)
        res.status(500).json({error:"Internel Error"})
    }
})

router.get('/:workType', async (req,res) => {
    try{
        const workType = req.params.workType

        if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
            const response = await Person.find({work : workType})
            console.log('data fetched')
            res.status(200).json(response)
        }else{
            console.log("enter correct data")
            res.status(404).json({error:"Invalid work type"})
               }
    }catch(err){
        console.log("Internel error")
        res.status(500).json({error:"Internel error"})
    }
})

router.put('/:id',async (req,res) => {
    try{
       const id = req.params.id
       const personData = req.body

       const response = await Person.findByIdAndUpdate(id,personData,{
        new : true,
        runValidators : true
       })

       if(!response){
        console.log("Invalid syntax.")
        res.status(404).json({error:"Error occured"})
       }

       console.log("Data Updated.")
       res.status(200).json(response)
    }
    catch(err){
      console.log("Internel error:",err)
      res.status(500).json({error:"Internel error"})
    }
})

module.exports = router