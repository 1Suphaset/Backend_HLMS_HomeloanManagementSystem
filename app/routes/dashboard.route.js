module.exports = (app) =>{

    const router = require('express').Router();

    app.get('/dashboard', (req, res) => {
        res.send('Dashboard Page');
      });
      
    app.use('/dashboard', router);
};
