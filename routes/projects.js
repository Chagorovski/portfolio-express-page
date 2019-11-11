const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

router.get('/:id' , (req, res) => {

    id = req.params.id;

    if (id > projects.length) {
        res.redirect('../error');
    }

    res.render('./project', { project, id });
});

module.exports = router;