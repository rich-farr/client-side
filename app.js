var express = require('express')
var dotenv = require('dotenv')
dotenv.load()
var app = express()

function giveKey = () {
	return process.env.GOOGLE_MAPS_API_KEY
}

giveKey()

module.exports = app

const port = process.env.PORT || 3000;
console.log('Listening on port ' + port)
app.listen(port);