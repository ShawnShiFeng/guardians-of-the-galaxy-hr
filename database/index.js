var Promise = require('bluebird');
var mongoose = require('mongoose');
var dbConfig = require('../config/db');

mongoose.connect(dbConfig.dbKey);
Promise.promisifyAll(mongoose);

//If the Mongoose connection is connected
mongoose.connection.on('connected', function () {  
  console.log('Mongoose connection open');
}); 

// If any error logs an error
mongoose.connection.on('error', function (err) {  
  console.log('Mongoose error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose connection disconnected'); 
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 

var PhotoSchema = new mongoose.Schema({
  userName: String,
  filePath: String,
  galleryName: String
});

module.exports.photo = mongoose.model('Photo', PhotoSchema);
