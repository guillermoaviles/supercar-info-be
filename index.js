const express = require('express')

const bodyParser = require('body-parser')

const app = express()

const supercarController = require('./controllers/application')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api/getsupercars/', supercarController)


app.listen(4000, () => console.log('Server running on port 4000!'))
