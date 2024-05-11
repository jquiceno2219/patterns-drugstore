const Employee = require("../entities/employee");

// Defines a class for managing employees.
//This class makes use of Singleton to check if an instance of EmployeeManager already exists.

class EmployeeManager {
  constructor() {
    // Checks if an instance of EmployeeManager already exists.
    if (EmployeeManager.instance) {
      return EmployeeManager.instance; // Returns the existing instance if available.
    }

    // Initializes an empty array to store employee objects.
    this.employees = [];

    // Stores the current instance to ensure only one instance exists.
    EmployeeManager.instance = this;
  }

  // Method to add a new employee to the manager's list.
  addEmployee(name) {
    // Checks if an employee with the same name already exists.
    const existingEmployee = this.employees.find(employee => employee.idEmployee === name);
    if (existingEmployee) {
      console.log(`Employee ${name} already exists.`);
      return;
    }
    // Creates a new employee object and adds it to the list.
    const newEmployee = new Employee(name);
    this.employees.push(newEmployee);
    console.log(`Employee ${name} has been added.`);
  }

  // Method to retrieve the list of employees.
  getEmployees() {
    return this.employees;
  }

  // Static method to get an instance of the EmployeeManager.
  static getInstance() {
    if (!EmployeeManager.instance) {
        EmployeeManager.instance = new EmployeeManager();
      }
      return EmployeeManager.instance;
    }
}

module.exports = EmployeeManager;