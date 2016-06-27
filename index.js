var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')
var iss = require('./views/iss.hbs')
var players = require('./views/players.hbs')

var endpoint = 'https://api.wheretheiss.at/v1/satellites/25544'
var myApi = 'http://localhost:3000/players'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }

  // In case you're curious
  //console.log("CLANG", data.body) // FYI: data.body is a string
  var anObj = JSON.parse(data.body)

  // Replace 'Space' below with the response
  var target = document.getElementById('heading')
  target.innerHTML = greeting({name: ', person that is interested in science!'})

  var position = document.getElementById('content')
  position.innerHTML = iss(anObj)
})

xhr.get(myApi, function (err, data) {
  if (err) {
    console.error(err)
  }

  // In case you're curious
  console.log("BOING", data.body) // FYI: data.body is a string
  var otherObj = JSON.parse(data.body)

  var addPlayer = document.getElementById('player')
  addPlayer.innerHTML = players(otherObj)
})
