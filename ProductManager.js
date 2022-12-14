const fs = require('fs/promises');
const {existsSync} = require('fs');

class ProductManager {
    static idCount = 0;
    constructor (path){
        this.path = path
    }

    async readFile() {
        const text = await fs.readFile(this.path, 'utf-8');
        const data = JSON.parse(text);
        return data;
      }
    
      async writeFile(data){
        const dataStr = JSON.stringify(data, null, '\t');
        await fs.writeFile(this.path, dataStr); 
      }
    
      async consultarProducto() {
        if (existsSync(this.path)) {
          return await this.readFile();
        } else {
          return [];
        }
      }
      async addProduct(pedido) {
        const product = await this.consultarProducto();
        if (!product.length)  {
            ProductManager.idCount = 1;
        } else {
            ProductManager.idCount = product[product.length - 1].id + 1;
        }
        const newProduct = {
          id: ProductManager.idCount,
          ...pedido
        };
        product.push(newProduct);
        await this.writeFile(product);
        return newProduct;
      }
    
   

}

module.exports = ProductManager;