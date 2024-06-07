//Constantes
const express= require('express');
const bodyParser=require('body-parser');
const mercadopago=require('mercadopago');
const cors=require('cors');

let app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

//Routes
app.post('/',(req,res)=>{
    console.log(req.body);
});

let port=process.env.PORT || 300;
app.listen(port,(req,res)=>{
  console.log('Servidor Rodando');
});