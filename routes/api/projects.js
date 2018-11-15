const express = require('express');
const { projectsController } = require('../../controllers');

const router = express.Router();
router.get('/', projectsController.list);

module.exports = router;
