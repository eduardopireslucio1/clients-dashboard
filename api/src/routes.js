const express = require('express');
const router = express.Router();

module.exports.load = (app) => {
    app.use('/api', router);
    router.use('/clients', require('./routes/clients'));
};
