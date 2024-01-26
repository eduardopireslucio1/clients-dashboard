const Client = require('../domain/client');
const clientsMock = require('../data/clients.mock');

class ClientRepository {
    findAll() {
        return clientsMock.map(client => new Client(client._id, client.name, client.image_src, client.enterprises));
    }

    findOne(id) {
        const clients = this.findAll();
        return clients.find(client => client._id === parseInt(id));
    }
}

module.exports = new ClientRepository();