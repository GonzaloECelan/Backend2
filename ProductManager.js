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

    
      async consultarProduct() {
        if (existsSync(this.path)) {
          return await this.readFile();
        } else{
          return []
        }

        
      }
      async addProduct(order) {
        const product = await this.consultarProduct();
        if (!product.length)  {
            ProductManager.idCount = 1;
        } else {
            ProductManager.idCount = product[product.length - 1].id + 1;
        }
        const newProduct = {
          id: ProductManager.idCount,
          ...order
        };
        product.push(newProduct);
        await this.writeFile(product);
        return newProduct;
      }
    

      async getProduct(){

        const readProduct = await this.readFile();
          return readProduct
      
        }

      async getProductById(idProduct){
       const readProduct = await this.readFile();
      
        const searchProductById = readProduct.find(element=>element.id === idProduct)
        if(!searchProductById){
          return console.error('PRODUCT NOT FOUND');
        }
        else{
          return searchProductById;
        }

      }

      async upGradeProduct(idProduct,product){
        const readProduct = await this.readFile();
        const productId = (element) => element.id === idProduct;

        const find = readProduct.findIndex(productId)
        const upGradeproduct = {
          id: idProduct,
          ...product
        }


    readProduct.splice(find,1,upGradeproduct);
     return await this.writeFile(readProduct)

    }

      async deleteProduct(idProduct){
        const readProduct = await this.readFile();
      
        const deleteProductById = readProduct.filter(element=>element.id != idProduct)

       return await this.writeFile(deleteProductById);
       
      

      }


     

   

}

module.exports = ProductManager;