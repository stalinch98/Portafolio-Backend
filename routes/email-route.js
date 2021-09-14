const express = require('express');

const emailApi = (app) => {
    const router = express.Router();
    app.use('/api/sendEmail', router);


    router.post('/', async(req, res) => {
        const { body: email } = req;
        try {
            res.status(200).json({
                data: questions,
                message: 'funciono hdp',
            });
        } catch (error) {
            res.status(400).json({
                message: 'error al enviar el email',
            });
        }
    });
};

module.exports = emailApi;