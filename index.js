const express = require('express');
const { config } = require('./config/config');

const app = express();

app.listen(config.port, () =>
    console.log(`Example app listening on port http://localhost:${config.port}`)
);