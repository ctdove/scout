//expressjs
const express = require('express');
const app = express();

//mailing package
const nodemailer = require('nodemailer');

app.use(express.static('public'));

// start the express web server listening on 1337
app.listen(1337, () => {
    console.log('listening on 1337');
});

// show the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

 var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'christian.thomas.dove@gmail.com',
        pass: 'CTD14@poolsvilleHS'
    }
});

/** var mailOptions = {
    from: 'christian.thomas.dove@gmail.com',
    to: 'christian.thomas.dove@gmail.com',
    subject: 'Test',
    text: 'it worked!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent:' + info.response);
    }
}); */