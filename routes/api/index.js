const projects = require('./projects');
const express = require('express');
const router = express.Router();

router.use('/projects', projects);

module.exports = router;
