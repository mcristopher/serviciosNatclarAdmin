//npm init
//npm install express
//npm install  body-parser
//npm install method-override
//npm install cors
//npm install mssql

/*imports*/
var express = require("express")
var bodyParser = require("body-parser")
var methodOverride = require("method-override")
var cors = require('cors')

var puerto = 8080

/*controller*/
var MovimientoController = require('./Controller/MovimientoController')

/*service*/
var app = express()
var router = express.Router()
router.get('/', function (req, res) {
    res.send("Servicios Rest - Movimiento")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/Movimiento')
    //.get(MovimientoController.listarTodo)
    .post(MovimientoController.insertarRegistro)
    .get(MovimientoController.buscarById)

api.route('/Movimiento/filtro')
    .get(MovimientoController.buscarByFiltro)

api.route('/Movimiento/:id')
    //.get(MovimientoController.buscarById)
    //.put(MovimientoController.modificarRegistro)
    .put(MovimientoController.confirmarRegistro)
    .delete(MovimientoController.eliminarRegistro)

app.use('/service', api)

app.listen(puerto, function () {
    console.log('Servidor escuchando en puerto ' + puerto)
})