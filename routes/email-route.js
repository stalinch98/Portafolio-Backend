const express = require('express');
const nodemailer = require('nodemailer');

const { config } = require('../config/config');

const emailApi = (app) => {
    const router = express.Router();
    app.use('/api', router);


    router.post('/send', async(req, res) => {
        const { body: email } = req;
        try {
            console.log(email.from);
            console.log(config.useremail);
            console.log(email.subject);
            console.log(email.msj);
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: config.useremail,
                    pass: config.pswdemail
                }
            });

            const mailOptions = {
                from: email.from,
                to: config.useremail,
                subject: email.subject,
                text: email.msj
            };
            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            res.status(200).json({
                message: 'funciono',
            });
        } catch (error) {
            res.status(400).json({
                message: 'error al enviar el email',
            });
        }
    });
};

module.exports = emailApi;