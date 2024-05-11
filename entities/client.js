class Client {
    constructor(idClient, name, surname, DNI, address, phone){
        this.idClient = idClient;
        this.name = name;
        this.surname = surname;
        this.DNI = DNI;
        this.address = address;
        this.phone = phone;
        
    }
}

module.exports = Client;