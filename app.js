var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post('/email', function (req, res) {
handleSayHello(req,res);
});
function handleSayHello(req, res) {
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'umair.israr92@gmail.com', // Your email id
            pass: '352010203576' // Your password
        }
    });

  var text = 'Hello world from \n\n' ;
  var mailOptions = {
    from: 'umair.israr92@gmail.com', // sender address
  //  to: 'DP+issue@comp7000.cloudintra.com', // list of receivers
    to: req.body.project_key+'+'+req.body.item_type+'@comp7000.cloudintra.com', // list of receivers
    subject: 'Test email from bot', // Subject line
    text: text //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
};
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    }
    else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    }
});
}
app.listen(process.env.port||3000,function(){
console.log("Express Started on Port 3000");
});
module.exports=router;
