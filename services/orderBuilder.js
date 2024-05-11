const Order = require("../entities/order");

class OrderBuilder{
    constructor() {
        this.idOrder = null;
        this.date = null;        
        this.idClient = null;
        this.products = [];
        this.idEmployee = null;
    }

    addIdOrder(idOrder) {
        this.idOrder = idOrder;
        return this;
    }

    addClient(idClient) {
        this.idClient = idClient;
        return this;
    }

    addDate(date) {
        this.date = date;
        return this;
    }

    addProducts(product, quantity){
      this.products.push({product, quantity});
      return this;
    }

    addIdEmployee(idEmployee){
        this.idEmployee = idEmployee;
        return this;
    }

    build() {
        if (!this.idOrder || !this.date || !this.idClient || !this.products || !this.idEmployee === 0){
            throw new Error("No se puede construir la orden sin datos.");
    }

    return new Order(this.idClient,
        this.date,     
        this.idEmployee,
        this.products,
        this.idEmployee);
    }
}

module.exports = OrderBuilder;