require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const itemRoutes = require('./routes/itemRoutes')

//express app
const app = express();

//middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.use("/api/", itemRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')

    app.listen(process.env.PORT, console.log("listening on port 5000"))
  })
  .catch((err) => {
    console.log(err)
  })

