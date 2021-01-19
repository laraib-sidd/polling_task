const express = require('express')
require('./db/mongoose')
const bodyParser = require('body-parser');
const Voter = require('./models/voter');

const app = express()


app.use(express.json())

app.get('/api/hello', (req, res) => {
    res.send({
        express: "Fuck you"
    })
})

app.post('/api/world', (req, res) => {
    console.log(req.body)
    res.status(200).send(`I received your POSt re ${req.body.post}`)
})

module.exports = app;