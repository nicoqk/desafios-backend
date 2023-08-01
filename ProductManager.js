
// const fs = require ("fs");
import fs from "fs";

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

}




//pruebas del codigo

const PM = new ProductManager();

//crea productos y el archivo Products.json
PM.addProduct({title:"Guitarra Fender Telecaster", description:"Tele 52", price:3500, thumbnail:"sin imagen", code:"TELE", stock:10});
PM.addProduct({title:"Guitarra Fender Stratocaster", description:"Start AVRI ", price:3000, thumbnail:"sin imagen", code:"STRAT", stock:10});
PM.addProduct({title:"Guitarra Gibson Les Paul", description:"Les Paul Standar", price:3500, thumbnail:"sin imagen", code:"LP", stock:10});
PM.addProduct({title:"Guitarra Gibson SG", description:"SG Standar", price:3500, thumbnail:"sin imagen", code:"SG", stock:10});


//console.log(PM.getProducts()); //Obtengo todos los productos
//console.log(PM.getProductById(4)); /Obtengo productos por ID
//console.log(PM.getProductById(2)); /Obtengo productos por ID

//PM.deleteProduct(1); //elimino productos por id
//PM.updateProduct(2, {title:"Guitarra Fender Jaguar", description:"Jaguar", price:58990, thumbnail:"Sin imagen", code:"FJ", stock:18}) //actualizo productos


export default ProductManager;