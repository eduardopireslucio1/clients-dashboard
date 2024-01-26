const ClientRepository = require('../repositories/clientRepository');

class GetTotalizers {
    execute() {
        const clients = ClientRepository.findAll();
        const totalizers = {
            clients: clients.length ?? 0,
            enterprises: clients?.length ? clients.reduce((total, item) => total + parseInt(item.total_enterprises), 0) : 0,
            realties: clients?.length ? clients.reduce((total, item) => total + parseInt(item.total_realties), 0) : 0,
        }
        return totalizers;
    }
}

module.exports = new GetTotalizers();