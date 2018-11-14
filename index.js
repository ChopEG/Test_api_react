require('dotenv').config();

const path = require('path');
const http = require('http');
const express = require('express');
const cors = require('cors');
const router = require('./routes');

const {
    PORT,
} = process.env;

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

const server = http.createServer(app);
server.listen(PORT, (err) => {
    if (err) {
        console.error('Server listen failed', err);
    }

    console.debug(`Server listening on port ${PORT}`);
});
