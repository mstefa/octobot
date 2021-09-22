const express = require('express');
const { processEvent } = require('../services/GHWebhooksService');
const router = express.Router();

router.post('/events', async function (req, res) {
  const payload = req.body;
  const info = {
    status: 'ok',
  };
  try {
    processEvent(payload);
    res.status(200).json(info);
  } catch (error) {
    console.log('An error occurred');
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
