module.exports = (app) =>{

    const router = require('express').Router();

    app.get('/', (req, res) => {
        res.send('Login Page');
      });

    app.use('/', router);
};
