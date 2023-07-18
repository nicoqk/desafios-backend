class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        if (this.validateCode(product.code)) {
            console.log("Error! Code exists!");
        } else {
            const producto = {id:this.generateId(), title:product.title, description:product.description, price:product.price, thumbnail:product.thumbnail, code:product.code, stock:product.stock};
            this.products.push(producto);
            console.log("Product added!");
        }
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        return this.products.find(item => item.id === id) || "Not found";

    }

    validateCode(code) {
        return this.products.some(item => item.code === code);
    }

    generateId() {
        let max = 0;

        this.products.forEach(item => {
            if (item.id > max) {
                max = item.id;
            }
        });

        return max+1;
    }
}






const PM = new ProductManager();

PM.addProduct({title:"Guitarra Fender Telecaster", description:"Tele 52", price:3500, thumbnail:"sin imagen", code:"TELE", stock:10});

PM.addProduct({title:"Guitarra Fender Stratocaster", description:"Start AVRI ", price:3000, thumbnail:"sin imagen", code:"STRAT", stock:10});

PM.addProduct({title:"Guitarra Gibson Les Paul", description:"Les Paul Standar", price:3500, thumbnail:"sin imagen", code:"LP", stock:10});

console.log(PM.getProducts());
console.log(PM.getProductById(3));
console.log(PM.getProductById(1));