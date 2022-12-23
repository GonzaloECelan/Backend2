const express = require('express');
const fs = require('fs');
const PORT = 8080;

const ProductManager = require('./ProductManager');

const manager = new ProductManager;

const app = express();

app.use(express.urlencoded({extended:true}));


// parseo de productos.json
const textProduct = fs.readFileSync('./src/Product.json', 'utf-8');
const productParse = JSON.parse(textProduct);



app.get('/products',  async (req,res)=>{
    res.sendFile(__dirname + '/src/Product.json')
})


app.get('/', async (req,res)=>{
    let limit = req.query.limit;
    if(!limit){
        return res.send(productParse)
    }else{
       let filterProduct = productParse.filter(u => u == limit)
       return res.send(filterProduct)
    }

})
app.get('/products/:id', async (req,res)=>{
    let idProduct = req.params.id;
    if(!idProduct){
        return res.send('Error found')
    }else{
        const findProductId = productParse.find(u=>u.id == idProduct)
        return res.send(findProductId);
    }

})

app.listen(PORT, ()=>{
    console.log('El servidor se levanto correctamente')
})