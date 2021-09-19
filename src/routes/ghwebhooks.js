const express = require('express');
const router = express.Router();

router.post('/', async function (req, res) {
  const data = req.body;
  const info = {
    status: 'ok',
  };
  try {
    console.log(data);
    res.status(200).json(info);
  } catch (error) {
    console.log('An error occurred');
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
