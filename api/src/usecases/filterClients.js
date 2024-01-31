const ClientRepository = require('../repositories/clientRepository');

class FilterClient {
    execute(input) {
        const clients = ClientRepository.findAll();
        if (input.filter) {
            let filtersClients = [];
            for (const client of clients) {
                if (client.name.toLowerCase().includes(input.filter.toLowerCase())) {
                    filtersClients.push(client);
                }
            }
            return filtersClients;
        }
        return clients;
    }
}

module.exports = new FilterClient();''