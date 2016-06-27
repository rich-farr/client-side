var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')
var iss = require('./views/iss.hbs')

var endpoint = 'https://api.wheretheiss.at/v1/satellites'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }

  // In case you're curious
  console.log("CLANG", data.body) // FYI: data.body is a string

  // Replace 'Space' below with the response
  var target = document.getElementsByTagName('h1')
  target.innerHTML = greeting({name: 'Captain Rich A. Farr (where the "A" is for "Awesome")'})

  var position = document.getElementById('content')
  position.innerHTML = iss(data.body)
})
