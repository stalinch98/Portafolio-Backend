const express = require('express');
const app = express();
const cors = require('cors');
const { config } = require('./config/config');
const emailApi = require('./routes/email-route');

app.use(express.json());
app.use(cors());
emailApi(app);

app.listen(config.port, () =>
    console.log(`Example app listening on port http://localhost:${config.port}`)
);