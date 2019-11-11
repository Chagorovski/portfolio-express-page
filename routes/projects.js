const express = require('express');
const router = express.Router();
const data = require('../data/data.json');
const projects = data.projects;


router.get('/:id', (req, res) => {
    const id = parseFloat(req.params.id);
    const project = projects[id]
    const techs = project.technologies;
    const imgs = project.image_urls;

    res.render('project', { projects, project, techs, imgs });
});

module.exports = router;