// Importa el paquete de express
let express = require('express');

var bodyParser = require('body-parser')



// Obtiene una instancia de express 
var app = express()
 
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.urlencoded({ extended: true }));

// Sobreescribe el método de envío
let methodOverride = require('method-override')
// sobreescribe el método POST
app.use(methodOverride('_method'))
 
// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
  res.send('welcome, ' + req.body.username)
})
 
// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
  // create user in req.body
})

// Importa las configuraciones
let appRoutes = require('./routes/app');

// Define que configuraciones de rutas se van a utilizar para la ruta
app.use('/', appRoutes);

// Configuraciones de las vistas
let exphbs = require('express-handlebars');
// Define la extensión que se va a utilizar para los archivos que representan
// las vistas
const extNameHbs = 'hbs';
// Crea una instancia de hbs con las conifugraciones definidas
let hbs = exphbs.create({extname: extNameHbs});
// Establece el uso de handlebars dentro de express.js
app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);

// Importa la configuración de la app
let appConfig = require('./configs/app');

// Comienza el servidor en el puerto 3000 de localhost
// para ver el sistema
app.listen(appConfig.express_port,() => {
  let show = 'App listening on port ' + appConfig.express_port + '! (http://localhost:' + appConfig.express_port +')';
  console.log(show);
});
