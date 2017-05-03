const express = require('express');
const app = express();
const path = require('path');

//mongoDB connection
const Photos = require(path.join(__dirname, '/database/index') );

app.use(express.static(__dirname + '/client'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
// //MongoDB testing put the data 
// var photos = new Photos({
//   userName: 'abc',
//   filePath: 'https://drive.google.com/file/d/0B3AAJJ2UZGHwVm9LWGxGOE9abkE/view?usp=sharing'
// });
// photos.saveAsync()
// .then(function(results) {
//   console.log(results);
// })
// .catch(function(error) {
//   console.log(error);
// });

//MongoDB testing accessing the data
Photos.findAsync({})
.then(function(results) {
  console.log('reading from mongo', results);
})
.catch(function(error) {
  throw error;
});

console.log(__dirname + '/database/index');

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port: ', process.env.PORT || 3000);
});
