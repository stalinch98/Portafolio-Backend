const express = require('express');
const nodemailer = require('nodemailer');

const { config } = require('../config/config');

const emailApi = (app) => {
    const router = express.Router();
    app.use('/api', router);


    router.post('/send', async(req, res) => {
        const { body: email } = req;
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: config.useremail,
                    pass: config.pswdemail
                }
            });

            const mailOptions = {
                from: config.useremail,
                to: 'stalin.dany98@gmail.com',
                subject: email.subject,
                text: email.msj,
                html: `<b style="font-size:30px; text-align: center; color:#1f8af4;"><span style="color:#4ce0a7;">${email.name}</span> quiere contactarse contigo</b><br> <p style="font-size:20px; color:#000">Debes contactarte al siguiente correo: ${email.from}</p><p style="font-size:20px; color:#000">Mensaje: ${email.msj}</p>`,
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