require('dotenv').config();

const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const router = require('./routes');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

module.exports = app;
