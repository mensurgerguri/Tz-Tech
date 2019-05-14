const User = require('../models/User')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');


process.env.SECRET_KEY = 'secret'


exports.login = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })
        .then(user => {
            if (user) {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                res.json({ token: token })
            } else {
                res.send('User does not exist')
            }
        })
        .catch(err => {
            res.send('error: ' + err);
        });
};


exports.register = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (!user) {
                createUser(req, res)
            } else {
                res.json('User with this email already exists.')
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
}

createUser = (req, res) => {
    const today = new Date()
    const userData = {
        id: req.body.id,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        profileImage: req.body.profileImage,
        roleId: req.body.roleId,
        created: today
    }
    User.create(userData)
        .then(user => {
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                expiresIn: 1440
            })
            sendMail(req, res)
            res.json({ token: token })
        })
        .catch(err => {
            res.send('error: ' + err)
        })
}

sendMail = (req, res) => {

    const output = `
        <p> Thank you for registering on our website</p>
        <h3> Contact Details</h3> 
        <ul>
            <li>Your Password is: ${req.body.password}</li>
        </ul>
        <p>Please contact as for any information you want.</p>
        <p></p>
        <p>Support team!</p>`;

    //create reusable transporter object using the default SMTP transport 
    let transport = nodemailer.createTransport({
        host: 'smtp.live.com',
        port: 587,
        secure: false, //true for 465, false for other ports
        auth: {
            user: 'ramicmujo@hotmail.com',
            pass: 'formax990*/'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: '"Nodemailer Contact" ',
        to: req.body.email,
        subject: 'Your login details',
        text: "Your login informations",
        html: output
    };

    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('contact', { msg: 'Email has been sent!' });
    });
}

