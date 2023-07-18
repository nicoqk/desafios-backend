const fs = require("fs");

class ProductManager {
    constructor() {
        this.products = [];
        this.path = "Products.json";
        this.createFile();
    }

    createFile() {
        if (!fs.existsSync(this.path)) {
            fs.writeFileSync(this.path, JSON.stringify(this.products));
        }
    }

    addProduct(product) {
        if (this.validateCode(product.code)) {
            console.log("Error! Code exists!");
        } else {
            const producto = {id:this.generateId(), title:product.title, description:product.description, price:product.price, thumbnail:product.thumbnail, code:product.code, stock:product.stock};
            this.products = this.getProducts();
            this.products.push(producto);
            this.saveProducts();
            console.log("Product added!");
        }
    }

    getProducts() {
        let products = JSON.parse(fs.readFileSync(this.path, "utf-8"));

        return products;
    }

    getProductById(id) {
        this.products = JSON.parse(fs.readFileSync(this.path, "utf-8"));

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

    saveProducts() {
        fs.writeFileSync(this.path, JSON.stringify(this.products));
    }
}

updateProduct(id, product) {
    this.products = this.getProducts();
    let pos = this.products.findIndex(item => item.id === id);

    if (pos > -1) {
        this.products[pos].title = product.title;
        this.products[pos].description = product.description;
        this.products[pos].price = product.price;
        this.products[pos].thumbnail = product.thumbnail;
        this.products[pos].code = product.code;
        this.products[pos].stock = product.stock;
        this.saveProducts();
        console.log("Product updated!");
    } else {
        console.log("Not found!");
    }
}

deleteProduct(id) {
    this.products = this.getProducts();
    let pos = this.products.findIndex(item => item.id === id);

    if (pos > -1) {
        this.products.splice(pos, 1); (0,1)
        this.saveProducts();
        console.log("Product #" + id + " deleted!");
    } else {
        console.log("Not found!");
    }
}





const PM = new ProductManager();

PM.addProduct({title:"Guitarra Fender Telecaster", description:"Tele 52", price:3500, thumbnail:"sin imagen", code:"TELE", stock:10});

PM.addProduct({title:"Guitarra Fender Stratocaster", description:"Start AVRI ", price:3000, thumbnail:"sin imagen", code:"STRAT", stock:10});

PM.addProduct({title:"Guitarra Gibson Les Paul", description:"Les Paul Standar", price:3500, thumbnail:"sin imagen", code:"LP", stock:10});

PM.addProduct({title:"Guitarra Gibson SG", description:"SG Standar", price:3500, thumbnail:"sin imagen", code:"SG", stock:10});

console.log(PM.getProducts());
console.log(PM.getProductById(3));
console.log(PM.getProductById(1));

//console.log(PM.getProductById(3));
//console.log(PM.getProductById(1));
//PM.deleteProduct(1);
//PM.updateProduct(2, {title:"Chaleco Puffer Ebruck Topo 4", description:"3 cuotas sin interes de $54.330ARS", price:58990, thumbnail:"https://vcp.com.ar/cdn/shop/files/Topo6_81943047-662b-4e1c-82ae-9e26fb212505.jpg?v=1688741569&width=700", code:"CHALECO 4", stock:18})
//console.log(PM.getProducts());