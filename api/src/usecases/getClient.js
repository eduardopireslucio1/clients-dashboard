const ClientRepository = require('../repositories/clientRepository');

class GetClient {
    execute(input) {
        const client = ClientRepository.findOne(input.id);
        if (!client) return;
        return {
            _id: client._id,
            name: client.name,
            image_src: client.image_src,
            total_enterprises: client.total_enterprises,
            total_realties: client.total_realties,
        };
    }
}

module.exports = new GetClient();