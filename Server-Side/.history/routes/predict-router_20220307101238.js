const express = require('express');
const router = express.Router();
const predictController = require('../controllers/predict-controller');

router.post('/', predictController)

module.exports = router;