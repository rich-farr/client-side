var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')
var iss = require('./views/iss.hbs')
var mapKey = process.env.GOOGLE_MAPS_API_KEY

var endpoint = 'https://api.wheretheiss.at/v1/satellites/25544'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }

  // In case you're curious
  //console.log("CLANG", data.body) // FYI: data.body is a string
  var obj = JSON.parse(data.body)
  var fixData = function (object) {
  	object.name = object.name.toUpperCase()
  	object.altitude = parseInt(object.altitude.toFixed(0))
  	object.velocity = parseInt(object.velocity.toFixed(0))
  	object.apikey = mapKey
  	return object
  }

  console.log("BOING", fixData(obj))
  var newObj = fixData(obj)

  // Replace 'Space' below with the response
  var target = document.getElementById('heading')
  target.innerHTML = greeting({name: ', person that is interested in science!'})

  var position = document.getElementById('content')
  position.innerHTML = iss(newObj)
})
