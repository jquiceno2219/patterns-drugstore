const Client = require("./entities/client");
const Employee = require("./entities/employee");
const Product = require("./entities/product");
const EmployeeManager = require("./repository/EmployeeRepository");
const OrderBuilder = require("./services/orderBuilder")

// Use example for Order with Builder
const cliente = new Client(1, "Juan", "Perez", "100", "Calle Mi Casa", "310578080");
const empleado1 = new Employee(1, "Ana", "Juanes", "Manager", "Providencia", "317777777");
const empleado2 = new Employee(2, "Ana", "Milena", "Manager", "Providencia", "317758777");
const empleado3 = new Employee(3, "Pepe", "Mojica", "Manager", "Centro", "317777789");
const producto1 = new Product(1, "Acetaminofén", "Típico", 5.0, 14, 3);
const producto2 = new Product(2, "Ibuprofeno", "Igual", 7.0, 10, 5);

const ordenBuilder = new OrderBuilder();
const orden = ordenBuilder.addIdOrder("0").addDate("27 de febrero").addClient(cliente.idClient).addProducts(producto1, 2).addProducts(producto2, 1).addIdEmployee(empleado1.idEmployee).build();

console.log(orden);

// Use example for Employee Manager with singleton instance
const employeeManager = new EmployeeManager();

employeeManager.addEmployee(empleado1.name);
employeeManager.addEmployee(empleado2.name); // Trying to add a duplicate employee
employeeManager.addEmployee(empleado3.name);

console.log(employeeManager.getEmployees());

//Use example for Prototye pattern, creating a prototype of a product
const paracetamolPrototype = new Product(1, "Paracetamol", "Descripción", 5.0, 30, 1);

// Creating new products based on the prototype
const paracetamol1 = paracetamolPrototype.clone();
paracetamol1.idProduct = 2;
paracetamol1.idProvider = 2;

//Cloning data from prototype
const paracetamol2 = paracetamolPrototype.clone();
// Editing some fields. let's say this one is from a different provider.
paracetamol2.idProduct = 3;
paracetamol2.description = "Distinto proveedor";
paracetamol2.price = 7.0;
paracetamol2.idProvider = 4;

console.log(paracetamol1);
console.log(paracetamol2);