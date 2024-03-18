const mongoose = require('mongoose')

const MyTableSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    date: String,
    time: String,
    guest: String
})

const MyTableModel= mongoose.model("Table", MyTableSchema)

module.exports = MyTableModel