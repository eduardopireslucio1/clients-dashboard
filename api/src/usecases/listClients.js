const ClientRepository = require('../repositories/clientRepository');

class ListClients {
    execute() {
        const clients = ClientRepository.findAll();
        return clients.map(({ _id, name, image_src, total_enterprises, total_realties }) => ({ _id, name, image_src, total_enterprises, total_realties }));
    }
}

module.exports = new ListClients();