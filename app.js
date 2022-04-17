var express = require("express");
var app = express();
app.get("*", async function(req, res){
res.end("dun duna dun");
var seconds = 0;
setInterval(() => {console.log(seconds);seconds+=1;}, 1000);
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  pool: true,
  auth: {
    user: "raisashahg@gmail.com",
    pass: "xfeltktrgimnoyqh",
  },
});
var mailingList = [{
  from: "raisashahg@gmail.com",
  to: "irf44g@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
}];
async function repeater() {
  transporter.sendMail(mailingList[0], async function(error, info){
    if (error) {
    console.log(error);
    } else {
    console.log('Email sent: ' + info.response);
    await reepeater();
    }
  });
}
async function reepeater() {
  transporter.sendMail(mailingList[0], async function(error, info){
    if (error) {
    console.log(error);
    } else {
    console.log('Email sent: ' + info.response);
    await repeater();
    }
  });
}
repeater();
}
app.listen(8080);
