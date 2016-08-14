var express = require('express'),
var router   =express.Router();
/*var  nodemailer=require('nodemailer');

var transporter = nodemailer.createTransport();

transporter.sendMail({
   from: 'sender@address',
   to: 'receiver@address',
   subject: 'hello',
   html: '<b>hello world!</b>'
   text: 'hello world!'
});
*/
var nodemailer = require('nodemailer');

var router = express.Router();
app.use('/sayHello', router);
router.post('/', handleSayHello); // handle the route at yourdomain.com/sayHello

function handleSayHello(req, res) {
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'umair.israr92@gmail.com', // Your email id
            pass: '352010203576' // Your password
        }
    });

  var text = 'Hello world from \n\n' + req.body.name;
  var mailOptions = {
    from: 'umair.israr92@gmail.com', // sender address
    to: 'DP+issue@comp7000.cloudintra.com', // list of receivers
    //to: req.body.project_key+req.body.item_type+'@comp7000.cloudintra.com', // list of receivers
    subject: 'Test email from bot', // Subject line
    text: text //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
};

}
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };
});
