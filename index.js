const express = require ("express");
const app = express();
const path = require("path")
const port = 2030;
app.listen(port, () => {console.log(`Corriendo en el puerto:${port}`)})
app.use(express.json());
app.use( express.static( "public" ) );
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.set('public',path.join(__dirname, '/public'));


let Productos = {
    "banana": {"name":"Banana",'precio': 30,"tipo":"Fruta","img": '/img/Banana.jpg','Cantidad': 0},
    "kiwi":{"name":"Kiwi",'precio':50,"tipo":"Fruta","img": '/img/Kiwi.jpg','Cantidad': 5},
    "lechuga": {"name":"Lechuga",'precio': 20,"tipo":"Verdura","img": '/img/Lechuga.jpg','Cantidad': 10},
    "limon":{"name":"Limon",'precio':25,"tipo":"Verdura","img": '/img/Limon.jpg','Cantidad': 0},
    "manzana": {"name":"Manzana",'precio':30,"tipo":"Fruta","img": '/img/Manzana.jpg','Cantidad': 20},
    "naranja": {"name":"Naranja",'precio':20,"tipo":"Fruta","img": '/img/Naranja.jpg','Cantidad': 0},
    "Papa":{"name":"Papa",'precio':30,"tipo":"Verdura","img": '/img/Papa.jpg','Cantidad': 12},
    "pera": {"name":"Pera",'precio':35,"tipo":"Fruta","img": '/img/Pera.jpg','Cantidad': 0},
    "zanahoria":{"name":"Zanahoria",'precio':10,"tipo":"Verdura","img": '/img/Zanahoria.jpg','Cantidad': 8},
}

app.get('/verduleria',function (req,res){
    let name = "Verduleria";
    res.render('Verduleria.ejs',{Productos:Productos});
});