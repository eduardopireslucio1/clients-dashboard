const ListClients = require('../usecases/listClients');
const GetTotalizers = require('../usecases/getTotalizers');
const GetClient = require('../usecases/getClient');
const GetEnterprises = require('../usecases/getEnterprises');
const FilterClients = require('../usecases/filterClients');

class ClientController {
    async index(req, res) {
        try {
            const clients = await ListClients.execute();
            return res.json(clients);
        } catch (error) {
            return res.status(500).json({ error: 'Fail to list clients!' });
        }
    }

    async getTotalizers(req, res) {
        try {
            const totalizers = await GetTotalizers.execute();
            return res.json(totalizers);
        } catch (error) {
            return res.status(500).json({ error: 'Fail to get totalizers!' });
        }
    }

    async getClient(req, res) {
        try {
            const client = await GetClient.execute(req.params);
            if (!client) {
                return res.status(500).json({ error: 'Client not found'});
            }
            return res.json(client);
        } catch (error) {
            return res.status(500).json({ error: 'Fail to get client!' });
        }
    }

    async getEnterprises(req, res) {
        try {
            const enterprises = await GetEnterprises.execute(req.params);
            return res.json(enterprises);
        } catch (error) {
            return res.status(500).json({ error: 'Fail to get enterprises!' });
        }
    }

    async filterClients(req, res) {
        try {
            const clients = await FilterClients.execute(req.query);
            return res.json(clients);
        } catch (error) {
            return res.status(500).json({ error: 'Fail to filter clients!' });
        }
    }
}

module.exports = new ClientController();