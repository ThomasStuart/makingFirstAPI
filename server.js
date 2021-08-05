require('dotenv').config()  // load in all enviroment variables such as DATABASE_URL

const express  = require('express')
const app      = express()
const mongoose = require('mongoose')


mongoose.connect( process.env.DATABASE_URL, { useNewUrlParser: true}) // connect to DB
const db = mongoose.connection

db.on('error', (error) => console.log(error))  // log error if we run into one
db.once('open', () => console.log('Connected to Database'))

// allow app to use MIDDLEWARE
app.use(express.json()) // accept JSON instead of GET element

// set up routes
const subsribersRouter = require('./routes/subscribers')
app.use('/subscribers', subsribersRouter )


app.listen(3000, () => console.log('Server Started'))

