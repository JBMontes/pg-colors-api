//The entry point to our app that listens for requests
//in package the main tells us it's server.js

const app = require('./app');

//gives us access to our environment variables in .env
require('dotenv').config();

const {PORT} = process.env

app.listen(PORT, ()=>{
    console.log(`Listening on PORT: ${PORT}`)
})