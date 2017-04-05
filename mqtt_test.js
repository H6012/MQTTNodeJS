var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://178.62.29.184')
 
client.on('connect', function () {
  client.subscribe('/itb/miot')
  client.publish('/itb/miot', 'Hello mqtt test message')
})
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString())
  client.end()
})