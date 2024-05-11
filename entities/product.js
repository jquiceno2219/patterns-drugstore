class Product {
    constructor(idProduct, productName, description, price, stock, idProvider){
        this.idProduct = idProduct;
        this.productName = productName;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.idProvider = idProvider;
        
    }
}

module.exports = Product;