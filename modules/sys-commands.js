var fun_mode = true;
var sysCommands = [dateCmd, funCmd, noFunCmd, idCmd, aboutCmd, goCmd, helpCmd, hiCmd, listCmd, nest18Cmd, nest19Cmd, nest20Cmd, nest21Cmd, nest22Cmd, nowCmd];
var { stdin, stdout } = process; 

exports.modName = "System Commands";

exports.checkCommands = function(dataHash, callback) {
  for (command in sysCommands) {
    var test = sysCommands[command](dataHash, callback);
    if (test)
      return test;
  }

  return false;
}

exports.fun_mode = function(){
  return fun_mode;
}

exports.getCmdListDescription = function () {
  return [
    {cmd: "/date", desc: "Current date"},
    {cmd: "/fun", desc: "Enable commands designated as fun commands", mod: true},
    {cmd: "/nofun", desc: "Disable commands designated as fun commands", mod: true},
    {cmd: "/id", desc: "Notifies the requester of their GroupMe ID"},
    {cmd: "/about", desc: "Responds with a short message about the bot"},
    {cmd: "/go", desc: "Send a test email to bot", mod: true},
    {cmd: "/nest18", desc: "Set Nest temperature to 18 degrees celsius", mod: true},
    {cmd: "/nest19", desc: "Set Nest temperature to 19 degrees celsius", mod: true},
    {cmd: "/nest20", desc: "Set Nest temperature to 20 degrees celsius", mod: true},
    {cmd: "/nest21", desc: "Set Nest temperature to 21 degrees celsius", mod: true},
    {cmd: "/nest22", desc: "Set Nest temperature to 22 degrees celsius", mod: true}
  ];
}







//return main();

function listCmd(dataHash, callback) {
  var regex = /^\/list$/;

  if (regex.test(dataHash.request.text)) {
    
    var { stdin, stdout } = process; 

function prompt(question) { 

return new Promise((resolve, reject) => { 

stdin.resume(); 

stdout.write(question); 

stdin.on('data', data => resolve(data.toString().trim())); 

stdin.on('error', err => reject(err)); 

}); 

} 

async function main() { 

try { 

var name = await prompt("What's your name? ") 

var age = await prompt("What's your age? "); 

var email = await prompt("What's your email address? "); 

var user = { name, age, email }; 

console.log(user); 
  
stdin.pause(); 

} catch(error) { 

console.log("There's an error!"); 

console.log(error); 

} 

process.exit(); 

}


    
callback(true, main, []);
    //return data;
    //return main();
    
 // var question = require('./modules/question');
//question;
} else {
return false;
}
}

//keys = Object.keys(object) 
//console.log(keys); 
//console.log(keys.length)


function dateCmd(dataHash, callback) {
  var regex = /^\/date$/;

var moment = require('moment'); 
var date = moment().utcOffset(-300).format('LLLL');
var f1 = require('./expo');
  if (regex.test(dataHash.request.text)) {
callback(true, date);
  f1.expo;
} else {
return false;
}
}

function funCmd(dataHash, callback) {
  var regex = /^\/fun$/;

  if (regex.test(dataHash.request.text)) {
    if (dataHash.isMod) {
      if (fun_mode) {
        callback(true, "I'm already as much fun as I can be!", []);
      } else {
        fun_mode = true;
        callback(true, "I'm fun again!", []);
      }
    } else {
      callback(true, "You're not the boss of me", []);
    }
  } else {
    return false;
  }
}

function noFunCmd(dataHash, callback) {
  var regex = /^\/nofun$/;

  if (regex.test(dataHash.request.text)) {
    if (dataHash.isMod) {
      if (!fun_mode) {
        callback(true, "I can't be any less fun right now.", []);
      } else {
        fun_mode = false;
        callback(true, "I'm no fun anymore!", []);
      }
    } else {
      callback(true, "You're not the boss of me", []);
    }
  } else {
    return false;
  }
}

function idCmd(dataHash, callback) {
  var regex = /^\/id$/;

  if (regex.test(dataHash.request.text)) {
    callback(true, "Your groupme id is: " + dataHash.request.sender_id);
  } else {
    return false;
  }
}

function aboutCmd(dataHash, callback) {
  var regex = /^\/about$/;

  if (regex.test(dataHash.request.text)) {
    callback(true, "AlexBot\n A Groupme bot written in NodeJs");
  } else {
    return false;
  }
}


//*****************This is where all the magic happens***************************

function goCmd(dataHash, callback) {
  var regex = /^\/go$/;

  if (regex.test(dataHash.request.text)) {
var nodemailer = require('nodemailer');
var Transport = nodemailer.createTransport('smtp://dstl%5Fmike1%40hotmail.com:113Hopest%21@smtp-mail.outlook.com');


var mailOptions = {
to: 'alexdeabot@gmail.com',
from: 'dstl_mike1@hotmail.com',
subject: 'Hello',
generateTextFromHTML: true,
html: '<b>Hello world</b>'
};

Transport.sendMail(mailOptions, function(error, response) {

if (error) {
console.log(error);
} else {
console.log(response);
}
});
}
}

//---------


function nest18Cmd(dataHash, callback) {
  var regex = /^\/nest18$/;

if (regex.test(dataHash.request.text)) {
  if (dataHash.isMod) {

    var fs = require('fs');
    var moment = require('moment'); 
    var date = moment().utcOffset(-300).format('LLLL');

    
    var stream = fs.createWriteStream("append.txt", {flags:'a'}); 
    console.log(new Date().toISOString()); 
    [...Array(10000)].forEach( function (item,index) { 
      stream.write(index + "\n"); 
    }); 
    console.log(new Date().toISOString()); 
    stream.end();
    //});
 
    //var content; 
    fs.readFile('./modules/modules/nest.txt', function read(err, data) { 
      if (err) //{ 
        throw err; 
               //} 
      var content = data; 
     console.log(data);
    });
      //});
    //console.log(data);
    callback(true, "Thermostat set to 18 degrees celsius", []);

  var nest18 = require('./modules/nest18');
nest18;
} else {
callback(true, "Access Denied! Only mods can adjust the temperature", []);
}
}
}

//-------------
function nest19Cmd(dataHash, callback) {
  var regex = /^\/nest19$/;

if (regex.test(dataHash.request.text)) {
  if (dataHash.isMod || (dataHash.request.sender_id = 685)) {

callback(true, "Thermostat set to 19 degrees celsius", []);
  var nest19 = require('./modules/nest19');
nest19;
} else {
callback(true, "Access Denied! Only mods can adjust the temperature", []);
}
}
}

//----------

function nest20Cmd(dataHash, callback) {
  var regex = /^\/nest20$/;

if (regex.test(dataHash.request.text)) {
  if (dataHash.isMod) {

callback(true, "Thermostat set to 20 degrees celsius", []);
var nest20 = require('./modules/nest20');
nest20;
} else {
callback(true, "Access Denied! Only mods can adjust the temperature", []);
}
}
}

//----------------***********-------------

function nest21Cmd(dataHash, callback) {
  var regex = /^\/nest21$/;

  if (regex.test(dataHash.request.text)) {
    if (dataHash.isMod) {

callback(true, "Thermostat set to 21 degrees celsius", []);
var nest21 = require('./modules/nest21');
nest21;
} else {
      callback(true, "Access Denied! Only mods can adjust the temperature", []);
}
}
}

//-----------------------------------------
function nest22Cmd(dataHash, callback) {
  var regex = /^\/nest22$/;

  if (regex.test(dataHash.request.text)) {
    if (dataHash.isMod) {

callback(true, "Thermostat set to 22 degrees celsius", []);
var nest22 = require('./modules/nest22');
nest22;
} else {
      callback(true, "Access Denied! Only mods can adjust the temperature", []);
}
}
}

//-----------

function helpCmd(dataHash, callback) {
  var regex = /^\/help$/;

  if (regex.test(dataHash.request.text)) {
   // if (dataHash.isMod) {

callback(true, "Click the link for a list of commands\nhttp://nodejs-mongo-persistent-cc.b9ad.pro-us-east-1.openshiftapps.com/commands", []);

} else {
      return false;
}
}




//function helpCmd(dataHash, callback, result) {
 // var regex = /^\/help$/;

  //if (regex.test(dataHash.request.text)) {
    //if (dataHash.isMod) {
//var fs = require('fs');
//var path = require('path');
//fs.readFile(path.resolve(__dirname, "./modules/help.txt"), (err, data) => {

 // //var helpful = require('../help');
// //fs.readFile('', (err, data) => { 
//if (err) { 
//console.error(err) 
//return;
//} 
////console.log(data) })
////callback(true, data, []);
//callback(true, "Command List \n" + data, []);


//return data;
////callback(true, "Help", []);
//})
   

    ////callback(true, "Command List ", {}, []);




  //} else {
    //return false;
  //}
//}
//}

//----------

function nowCmd(dataHash, callback) { 
var regex = /^\/now$/; 
if (regex.test(dataHash.request.text)) { 
if (dataHash.isMod) { 
callback(true, "Now", []);
var fs = require('fs'); 
var fileName = './commandlist.js'; 
var file = require('./commandlist'); 
file.key = "new value"; 
fs.writeFile(fileName, JSON.stringify(file, null, 2), 
function (err) { 
if (err) return console.log(err); 
console.log(JSON.stringify(file)); 
console.log('writing to ' + fileName); 
});
} else { 
callback(true, "Not now", []);
}
}
}

//----------

function hiCmd(dataHash, callback) {
  var regex = /^\/hi$/;

var moment = require('moment'); 
var date = moment().utcOffset(-300).format('LLLL');
var time = moment().utcOffset(-300).hour();

  if (regex.test(dataHash.request.text)) {
if (time < 12) {
msg = "Good morning";
} else if (time < 17) {
msg = "Good afternoon";
} else if (time > 17) {
msg = "Good evening";
}
callback(true, msg, []);
  return msg;
} else {
return false;
}
}


//-------

