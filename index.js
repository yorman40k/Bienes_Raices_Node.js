const express = require('express');


//Crear la app
const app = express();

//Routing
app.get('/', function(req, res) {
    res.send('Hola mundo en express');
});

//Definir un puerto y arrancar la app
const port = 3000;

app.listen(port, () => { 
    console.log(`El servidor esta corriendo en el puerto ${port}`); 
})