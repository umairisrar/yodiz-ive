var express = require('express');
var nodemailer = require('nodemailer');
var app = express();
var router = express.Router();


app.post('/email', function (req, res) {
  res.send('Got a POST request');
});

app.listen(process.env.port||3000,function(){
console.log("Express Started on Port 3000");
});
module.exports=router;
