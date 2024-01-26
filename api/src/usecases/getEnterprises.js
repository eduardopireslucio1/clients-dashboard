const ClientRepository = require('../repositories/clientRepository');

class GetEnterprises {
    execute(input) {
        const client = ClientRepository.findOne(input.id);
        return client.enterprises ?? [];
    }
}

module.exports = new GetEnterprises();