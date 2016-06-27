var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')
var iss = require('./views/iss.hbs')

var endpoint = 'https://api.wheretheiss.at/v1/satellites/25544'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }

  // In case you're curious
  console.log("CLANG", data.body) // FYI: data.body is a string
  var obj = JSON.parse(data.body)

  // Replace 'Space' below with the response
  var target = document.getElementById('heading')
  target.innerHTML = greeting({name: 'Captain Rich A. Farr (where the "A" is for "Awesome")'})

  var position = document.getElementById('content')
  position.innerHTML = iss(obj)
})
