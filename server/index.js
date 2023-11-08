const itemRoutes = require('./routes/itemRoutes')

const express = require('express');
const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


app.use("/api/items", itemRoutes)

app.listen(5000, console.log("listening on port 5000"))