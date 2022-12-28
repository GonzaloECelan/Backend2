const express = require('express');
const fs = require('fs');
const PORT = 8080;

const ProductManager = require('./ProductManager');

const manager = new ProductManager;

const app = express();

app.use(express.urlencoded({extended:true}));


// parseo de productos.json
const textProduct = fs.readFileSync('./src/Product.json', 'utf-8');
const ListProducts = JSON.parse(textProduct);


app.get('/products', async (req,res)=>{
    let limitProduct = req.query.limit;
    if(!limitProduct){
        return res.send({ListProducts});
    }else{
       let filterProductLimit = ListProducts.filter((product,indice) => indice < limitProduct)
       return res.send({filterProductLimit})
    }
  

})
app.get('/products/:id', async (req,res)=>{
    let idProduct = req.params.id;
    if(idProduct == 0){
        return res.send('Error found')
    }else{
        const findProductId = ListProducts.find(u=>u.id == idProduct)
        
        return res.send({findProductId})
 
        
    }

})

app.listen(PORT, ()=>{
    console.log('El servidor se levanto correctamente')
})