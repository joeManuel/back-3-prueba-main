const { Router } = require('express');
const { deleteEntrega } = require('../controllers/entregar-laboratorio.controller');
const { getAllReserva, getReserva, createReserva, deleteReserva, updateReserva } = require('../controllers/reserva-laboratorio.controller')

const router = Router();

router.get('/reserva', getAllReserva)
router.get('/reserva/10', getReserva)
router.post('/reserva', createReserva)
router.delete('/reserva', deleteReserva)
router.put('/reserva', updateReserva)


module.exports = router;