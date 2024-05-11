const Client = require("./entities/client");
const Employee = require("./entities/employee");
const Product = require("./entities/product");
const OrderBuilder = require("./services/orderBuilder")

// Ejemplo de uso
const cliente = new Client("Juan", "Calle Principal 123");
const empleado = new Employee("Ana");
const producto1 = new Product("Paracetamol", 5.0);
const producto2 = new Product("Ibuprofeno", 7.0);

const ordenBuilder = new OrderBuilder();
const orden = ordenBuilder.addIdOrder("0").addClient(cliente.idClient).addDate("27 de febrero").addIdEmployee(empleado).addProducts(producto1, 2).addProducts(producto2, 1).build();

console.log(orden);