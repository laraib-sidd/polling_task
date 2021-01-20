const express = require('express')
require('./db/mongoose')
const bodyParser = require('body-parser');
const Voter = require('./models/voter');

const app = express()


app.use(express.json())

app.post('/api/vote', (req, res) => {
})

app.get('/api/data', (req, res) => {
    
})

app.get('/api/counts',(req,res)=>{

})

app.get('/api/resutls',(req,res)=>{
    
})

module.exports = app;