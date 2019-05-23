const express = require('express')
const app = express()
 
app.use(express.static(__dirname + '/public'))
/* app.get('/', function (req, res) {
  res.send('<b> Hola </b> <br> <p> mundo buu </p>')
}) */
 
app.listen(3000)