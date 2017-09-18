/**
 * Created by User on 18.09.2017.
 */
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var path = require("path");

var formidable = require("formidable");
var fs = require("fs"),
    sys = require("util");

app.use(express.static(__dirname+'/web/src'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


app.get('/home',function(req,res){
        res.sendFile(__dirname + '/web/view/home.html');
});

app.post('/message', function (req, res) {
   var name =  req.body.name;
   var message = req.body.message;
   console.log("hi " + name + " your message " + message);
   res.send({success:true, msg:"hi " + name + " your message " + message });
});


// Start the server param post and hostname
app.listen(3000,"localhost", function(){
    console.log('There will be dragons: http://localhost:3000');
});
