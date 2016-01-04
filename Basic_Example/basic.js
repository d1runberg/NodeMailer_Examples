var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',   //use whatever email account service you want!
    auth: {
        user: 'FROM@gmail.com',
        pass: 'password'
    }
}, {
    // default values for sendMail method
    from: 'FROM@address',
    headers: {
        'My-Awesome-Header': '123'
    }
});


transporter.sendMail({
    to: 'TO@address',
    subject: 'hello',
    text: 'hello world!'
});
