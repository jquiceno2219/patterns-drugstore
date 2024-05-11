class Order {
    constructor(idOrder, date, idClient, products, idEmployee){
        this.idOrder = idOrder;
        this.date = date;
        this.idClient = idClient;
        this.products = products;
        this.idEmployee = idEmployee;
    }
}


module.exports = Order;