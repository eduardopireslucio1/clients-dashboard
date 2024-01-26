const ClientController = require('../controllers/clientController');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return ClientController.index(req, res);
});

router.get('/totalizers', (req, res) => {
    return ClientController.getTotalizers(req, res);
});

router.get('/:id', (req, res) => {
    return ClientController.getClient(req, res);
});

router.get('/:id/enterprises', (req, res) => {
    return ClientController.getEnterprises(req, res);
});

module.exports = router
