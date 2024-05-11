class Product {
    constructor(idProduct, productName, description, price, stock, idProvider){
        this.idProduct = idProduct;
        this.productName = productName;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.idProvider = idProvider;
        
    }

    //Use of prototype pattern
    clone() {
        // Creating a new instance and cloning the attributes
        return new Product(this.idProduct, this.productName, this.description, this.price, this.stock, this.idProvider);
      }
}

module.exports = Product;