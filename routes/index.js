const express = require('express');
const router = express.Router();
const { projects } = require('../data');

router.get('/', (req, res) => {
    res.render('./', { projects });
});

module.exports = router;