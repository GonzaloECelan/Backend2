
const ProductManager = require('./ProductManager');

const manager = new ProductManager('./Product.json');

const productManager = async () => {
    try {
    const product1 = {
        title: "Televisor Lg",
        description: "Televisor 50pulgadas",
        price: 12000,
        img:'imagen tv',
        code: 123241451,
        stock:20
    }

    const newProduct1 = await manager.addProduct(product1)
    const product2 = {
        title: "Lavarropa Samsung",
        description: "Lavarropa multifuncion",
        price: 8000,
        img:'imagen lavarropa',
        code: 123241541,
        stock:20
    }
    const newProduct2 = await manager.addProduct(product2)
    }
    catch(error) {
      console.log(error);
    }
  } 
  
  productManager();