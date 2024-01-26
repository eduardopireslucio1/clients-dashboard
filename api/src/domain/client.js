const Enterprise = require('./enterprise');

class Client {
    constructor(_id, name, image_src, enterprises) {
        this._id = parseInt(_id);
        this.name = name;
        this.image_src = image_src;
        this.enterprises = [];
        this.total_enterprises = enterprises?.length ?? 0;
        this.total_realties = 0;
        this.setEnterprises(enterprises);
    }

    calculateTotalRealties() {
        this.total_realties = this.enterprises?.length ? this.enterprises.reduce((total, item) => total + parseInt(item.realties), 0) : 0;
    }

    setEnterprises(enterprises) {
        this.enterprises = enterprises.map(enterprise => new Enterprise(enterprise._id, enterprise.name, enterprise.image_src, enterprise.realties));
        this.calculateTotalRealties();
    }
}

module.exports = Client;