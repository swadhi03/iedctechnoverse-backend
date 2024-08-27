const mongoose = require("mongoose")
const cors = require("cors")
const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const ContactModel = require("./models/AddContact")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://swathi:swathi2609@cluster0.em0miqo.mongodb.net/technodb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/ContactAdd",(req,res)=>{
    let input = req.body
    let contact = new ContactModel(input)
    contact.save(input)
    res.json({"status":"success"})
})

app.listen("8080",()=>{
    console.log("server started")
})