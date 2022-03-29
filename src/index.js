const payers = require('./payers_data')
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(payers)
});

app.listen (3000, () => {
    console.log('Listening on port 3000')
});