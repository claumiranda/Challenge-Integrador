const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

// configuracion carpeta public
app.use(express.static('public'));

// configuracion ejs
app.set('view engine', 'ejs');
app.set('views', './src/views');

// configuracion ejs layouts
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

// analizar datos de formularios codificados en la url
app.use(express.urlencoded({ extended:false }));

// rutas
app.use(require('./src/routes/mainRoutes'));
app.use(require('./src/routes/shopRoutes'));

// configuracion del puerto
const PORT = 3000;
app.listen( PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
} );