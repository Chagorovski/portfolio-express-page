const express = require('express');
      homeRoute = require('./routes');
      about = require('./routes/about');
      projects = require('./routes/projects');  

const app = express();

// View engine set up
app.set('view engine', 'pug');

// Static method 
app.use('/static', express.static('public'));

// Mounting the middlewares
app.use(homeRoute);
app.use('/about', about);
app.use('/project', projects);

// Middleware for Errors
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
  
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});