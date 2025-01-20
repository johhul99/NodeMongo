const express = require('express');
const app = express();
const PORT = 5250;


console.log("Hello World!");


app.listen(PORT, () => {
    console.log("Up and running on PORT 5250!");
});