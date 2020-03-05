const express = require('express');
const app = express();
const { quotes } = require('./data')

const PORT = process.env.PORT || 4000;


app.get('/home', (req, res, next) => {
    res.send('This is home');
});

app.get('/quotes', (req, res, next) => {
    res.send(quotes);
});

app.get('/home/shop', (req, res, next) => {
    res.send('This is the shop');
});



app.listen(PORT, () => {
    console.log(`The server is up and running on port ${PORT}`);
});