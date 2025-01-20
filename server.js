require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5250;

const Product = require('./Models/productModel');


app.get('/', (req, res) => {
    res.send('Welcome to my mongo api'); 
});

app.post('/blogpost', (req, res) => {
    res.send('This is a post request');
});


mongoose.
connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to Mongo DB');
    app.listen(PORT, () => {
        console.log("Up and running on PORT 5250!");
    });
});