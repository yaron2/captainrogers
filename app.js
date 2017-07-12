const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, 'site')))

app.get('/', function (req, res) {
  //res.sendFile("index.html")
  res.status(200).send("Hi!!!!!!");
})

var port = process.env.PORT || 3000

app.listen(port, function () {
  console.log("Changed");
  console.log('Captain Rogers Is Ready on port ' + port)
})