const { Router } = require('express');
const { getAllDetalle, getDetalle, createDetalle, deleteDetalle, updateDetalle } = require('../controllers/detalle-reserva.controller');
const router = require('./lab.routes');


const routes = Router();

router.get('/detalle-reserva', getAllDetalle)

router.get('/detalle-reserva/10', getDetalle)

router.post('/detalle-reserva', createDetalle)

router.delete('/detalle-reserva', deleteDetalle)

router.put('/detatalle-reserva', updateDetalle)


module.exports = router;