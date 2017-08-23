const aws = require('aws-sdk');  

exports.handler = (event, context, callback) => { 
  
  console.log(event);
  var output = {
    status: "200",
    response: event
  }
  callback(null, {output});
} 