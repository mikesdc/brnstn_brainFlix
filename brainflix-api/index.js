const express = require("express");
const app = express();


// setting up routes

app.get('/', (req, res) => {
    console.log("here");
    res.sendStatus(500);
    res.send('hi');
})


app.listen(3000);

