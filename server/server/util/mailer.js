const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'qq',
    port: 465,
    secureConnection: true,
    auth: {
        user: '1027061303@qq.com',
        pass: 'hblvcvbfqbcdbcda'
    }
});

let mailOptions = {
    from: '"FxLsoft" <1027061303@qq.com>',
    to: 'hjxtclm@qq.com',
    subject: 'hello',
    html: '<h1>Hello world!</h1>'
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log(info);
        console.log('Message sent: %s', info.messageId);
    }
})