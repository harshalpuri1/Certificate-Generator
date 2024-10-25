var nodemailer = require('nodemailer');
const ejs = require('ejs');
const { constantsString } = require('./constants');


// functions for transporter to send email to user
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.HOST_EMAIL,
      pass: process.env.HOST_EMAIL_PASSWORD 
    }
  });
  
//   function for send otp email
  const sendOtpEmail = async (email,otp)=>{
    try{
        const data = await ejs.renderFile(__dirname + "/mailTemplate/otpTemplate.ejs", { email: email, otp: otp });
        var mailOptions = {
            from: process.env.HOST_EMAIL,
            to: email,
            subject: constantsString.otpString,
            html :  data
        };
        await transporter.sendMail(mailOptions);
    }
    catch(error){
        throw error;
    }
  } 
  
//   function for send new password on email
  const sendEmail = async (email,password)=>{
    try {
        const data = await ejs.renderFile(__dirname + "/mailTemplate/passwordTemplate.ejs", { email: email, password: password });
        var mailOptions = {
            from: process.env.HOST_EMAIL,
            to: email,
            subject: constantsString.forgotPassword,
            html :  data
          };
        await transporter.sendMail(mailOptions);
    }
    catch(error){
      throw error;
    }
  }

  module.exports = {sendEmail,sendOtpEmail}