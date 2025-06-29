const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./_config');

//require('dotenv').config();

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// Initializing the app
const app = express();
let mongodb_url = 'mongodb://localhost:27017/';
let dbName = 'darkroom';

// connecting the database

const MONGODB_URI = process.env.MONGODB || config.mongoURI[app.settings.env]||`${mongodb_url}${dbName}`
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true  },(err)=>{
    if (err) {
        console.log(err)
    }else{
        console.log(`Connected to Database: ${MONGODB_URI}`)
    }
});

// test if the database has connected successfully
// let db = mongoose.connection;
// db.once('open', ()=>{
//     console.log('Database connected successfully')
// })




// View Engines
app.set('view engine', 'ejs');

// Set up the public folder;
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(express.json())


app.use('/', index);
app.use('/image', image);



 
const PORT = process.env.PORT || 5000;
app.listen(PORT,() =>{
    console.log(`Server is listening at http://localhost:${PORT}`)
});


module.exports = app;