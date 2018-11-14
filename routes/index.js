const express = require('express');
const router = express.Router();
const apiRouter = require('./api');
const {
    mainController,
} = require('../controllers');

router.use('/api', apiRouter);
router.use('*', mainController.notFound);

module.exports = router;
