const express = require('express');
const app = express();
const { config } = require('./config/config');
const emailApi = require('./routes/email-route');

app.use(express.json());
emailApi(app);

app.listen(config.port, () =>
    console.log(`Example app listening on port http://localhost:${config.port}`)
);