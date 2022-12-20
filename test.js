
const ProductManager = require('./ProductManager');

const manager = new ProductManager('./Product.json');

const test = async () => {
    try { 

let product = {
    title: "Monitor Samsung ",
    description: "Monitor Samsung 24' ",
    price: 46000,
    img: "imagen monitor ",
    code: 680,
    stock: 25
  }

const añadirproducto = await manager.addProduct();

// const modificarProducto = await manager.upGradeProduct()

// const consultarProducto = await manager.getProduct();
// // // console.log(consultarProducto)

// const buscarProducto = await manager.getProductById();
// // // console.log(buscarProducto)

// const borrarProducto = await manager.deleteProduct();


  }
    catch(error) {
      console.log(error);
    }
  } 
  
  test();