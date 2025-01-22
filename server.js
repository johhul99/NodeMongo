require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5250;

const Product = require('./Models/productModel');
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to my mongo api');
});

app.post('/blogpost', (req, res) => {
    res.send('This is a post request');
});

app.post('/api/product', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(404);
    }
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
    }
});

app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {

    }
});

app.put('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({ message: "Product does not exist." });
        }

        const newProduct = await Product.findById(id);
        res.status(200).json(newProduct);
    } catch (error) {
        res.send(error.message);
    }
});

app.delete('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Product does not exist."})
        }
        res.status(200).json({ product, message: "deleted." })
        
    } catch (error) {
        res.send(error.message);
    }
});


mongoose.
    connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to Mongo DB');
        app.listen(PORT, () => {
            console.log("Up and running on PORT 5250!");
        });
    });