const express = require('express');
const app = express();
const cors= require('cors');

const colorsController = require('./controllers/colorsController')

//middleware
app.use(cors());
app.use(express.json());

//when the URL starts w/colors, use the colorsController to route us appropriately
app.use('/colors', colorsController)


app.get('/', (req,res)=>{
    res.send('Welcome to Colors App')
});

app.get('*', (req,res)=>{
    res.status(404).send({message: `Error`})
})

module.exports = app;
