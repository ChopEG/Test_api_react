const express = require('express');
const apiRouter = require('./api');
const { mainController } = require('../controllers');

const router = express.Router();
router.use('/api', apiRouter);
router.use('*', mainController.notFound);

module.exports = router;
