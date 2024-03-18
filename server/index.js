//API Codes
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const MyTableModel = require('./models/Table')

const app = express()           
app.use(express.json())         
app.use(cors())                

mongoose.connect("mongodb://localhost:27017/Restaurant")

app.post('/book',(req, res) => { 
    MyTableModel.create(req.body)              
        .then(collection => res.json(collection))  
        .catch(err => res.json(err))  
})

app.listen(3001, () => {
    console.log("server running on port 3001")
})