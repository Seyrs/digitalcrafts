const nodemailer = require("nodemailer");
var nodemailer = require('nodemailer');


// async..await is not allowed in global scope, must use a wrapper
// part of default -> async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
 auth: {
        user: 'flyscott92@gmail.com',
        pass: 'mprqgtrdtxgppshf'
    }
});

const mailOptions = {
    from: 'flyscott92@gmail.com', // sender address
    to: 'flyscott92@gmail.com', // list of receivers
    subject: 'Testing out my code man', // Subject line
    html: '<p>....testing man......</p>'// plain text body
  };
    /* default regular
    send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"SeyR 👻" <flyscott92@gmail.com>', // sender address
    to: "hollowzeus@gmail.com, seyscott5@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  });


  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

  */

transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });