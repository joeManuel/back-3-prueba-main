const { Router } = require('express');
const { getAllObservacion, getObservacion, createObservacion, deleteObservacion, updateObservacion } = require('../controllers/observacion.controller')

const router = Router();

router.get('/observacion', getAllObservacion)

router.get('/observacion/10', getObservacion)

router.post('/observacion', createObservacion)

router.delete('/observacion', deleteObservacion)

router.put('/observacion', updateObservacion)


module.exports = router;