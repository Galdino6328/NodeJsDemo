var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'thalyson.santos@hotmail.com',
    pass: '------'
  }
});

var mailOptions = {
  from: 'thalyson.santos@hotmail.com',
  to: 'thalyson.galdino@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});