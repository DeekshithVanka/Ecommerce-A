// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors=require("cors")
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))
const corop={
    origin:'http://127.0.0.1:5500'
}

app.use(cors(corop))




// Connect to MongoDB
mongoose.connect("mongodb+srv://vamshi56vb:5B5uCcCoTS0rxFix@cluster0.oa7njwq.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0")
.then(console.log('Connected to MongoDB'))
.catch((err)=>{
console.log(err)
})






// Routes
app.use('/api', apiRoutes);



app.listen(PORT,()=>
    {
        console.log("app is listening")
    })