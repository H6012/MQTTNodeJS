/* The objective of this application is to act as middleware
 * susbcribe to observable objects in COAP
 
 
 npm install coap-node --save
 npm install mqtt --save
 
 
 */

var mqtt = require('mqtt')
var mqtt_client  = mqtt.connect('mqtt://178.62.29.184')
 
 var coap = require('coap-node')
 
 // Instantiate a machine node with a client name and your smart object 
//var cnode = new coap('my_first_node', so);

// const coap  = require('../') // or coap
// , 
/*
var req = coap.request({  
    pathname: '/',  
    options: {  
        'Accept': 'application/json'  
    }  
}); 
*/
/*
req.on('response',  
function(res) {  
    console.log('response code', res.code);  
  
    
});  
 */
 
 
 
mqtt_client.on('connect', function () {
  mqtt_client.subscribe('/itb/miot')
  mqtt_client.publish('/itb/miot', 'Hello mqtt test message')
})
 
mqtt_client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString())
  mqtt_client.end()
})