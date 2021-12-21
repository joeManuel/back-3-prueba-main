const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const detalleRoutes = require('./routes/detalle-reserva.routes');
const docenteRoutes = require('./routes/docente.routes');
const entregaRoutes = require('./routes/entrega-laboratorio.routes');
const labRoutes = require('./routes/lab.routes');
const materiaRoutes = require('./routes/materia.routes');
const observacionRoutes = require('./routes/observacion.routes');
const practicaRoutes = require('./routes/practica.routes');
const reservaRoutes = require('./routes/reserva-laboratorio.routes');
const usuarioRoutes = require('./routes/usuario.routes');
const login = require('./routes/login.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


//RUTAS
app.use(detalleRoutes);
app.use(docenteRoutes);
app.use(entregaRoutes);
app.use(labRoutes);
app.use(materiaRoutes);
app.use(observacionRoutes);
app.use(practicaRoutes);
app.use(reservaRoutes);
app.use(usuarioRoutes);
app.use(login);


//errores
app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})


//puerto del backend
app.listen(4000)
console.log('listening on port 4000');