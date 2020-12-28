const express = require('express');
const app = express();
const routeURL = require('./routes/routes.js')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config()


mongoose.connect(process.env.DATABASE_STRING,()=>{
    console.log('Database connected');
})
app.use(express.json())
app.use(cors())
app.use('/route',routeURL)

app.listen(4000,console.log('Listening on port 4000'));