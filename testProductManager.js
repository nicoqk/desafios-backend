import ProductManager from "./ProductManager";

const PM = new ProductManager();

PM.addProduct({title:"Guitarra Fender Telecaster", description:"Tele 52", price:3500, thumbnail:"sin imagen", code:"TELE", stock:10});

PM.addProduct({title:"Guitarra Fender Stratocaster", description:"Start AVRI ", price:3000, thumbnail:"sin imagen", code:"STRAT", stock:10});

PM.addProduct({title:"Guitarra Gibson Les Paul", description:"Les Paul Standar", price:3500, thumbnail:"sin imagen", code:"LP", stock:10});

console.log(PM.getProducts());
console.log(PM.getProductById(3));
console.log(PM.getProductById(1));