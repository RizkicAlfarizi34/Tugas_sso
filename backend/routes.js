// routes.js
const express = require('express');
const router = express.Router();

// Definisi rute
router.get('/', (req, res) => {
  res.send('Halo dunia dari rute terpisah!');
});

// Rute lainnya...

module.exports = router;
