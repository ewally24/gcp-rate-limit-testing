const express = require('express');
const router = express.Router();

const swarmController = require('../../controller/swarmController');

router.get('/', swarmController.swarmServer);

module.exports = router;