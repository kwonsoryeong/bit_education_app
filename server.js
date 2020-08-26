var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 3004

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/Users')
var Bulletins = require('./routes/Bulletins')
var Bangs = require('./routes/Bangs')
var Qnas = require('./routes/Qnas')
var Homeworks = require('./routes/Homeworks')
var Videos = require('./routes/Videos')

app.use('/users', Users)
app.use('/bulletins', Bulletins)
app.use('/bangs', Bangs)
app.use('/qnas', Qnas)
app.use('/homeworks', Homeworks)
app.use('/videos', Videos)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})