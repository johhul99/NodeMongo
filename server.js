const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5250;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Welcome to my mongo api'); 
});

app.post('/blogpost', (req, res) => {
    res.send('This is a post request');
});


app.listen(PORT, () => {
    console.log("Up and running on PORT 5250!");
});

mongoose.
    connect('mongodb+srv://johanhultin99:braskmannen99@cluster0.l2ff3.mongodb.net/products-api?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
    console.log('Connected to Mongo DB');
    });