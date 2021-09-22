const express = require('express');
const GHServices = require('../services/GHWebhooksService');
const router = express.Router();

router.post('/', async function (req, res) {
  const payload = req.body;
  const info = {
    status: 'ok',
  };
  try {
    GHServices(payload);
    res.status(200).json(info);
  } catch (error) {
    console.log('An error occurred');
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
