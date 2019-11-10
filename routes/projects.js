const express = require('express');
const router = express.Router();
const { projects } = require('../data');

router.get('/:id' , (req, res) => {

    id = req.params.id;

    if (id > projects.length) {
        res.redirect('../error');
    }

    let project = '';
    for (let data of projects) {
        if (id === data.id) {
            project = data;
        }
    }

    res.render('./project', { project });
});

module.exports = router;