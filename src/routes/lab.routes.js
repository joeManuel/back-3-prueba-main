const { Router } = require('express');
const { getAllLabs, getLab, createLab, deleteLab, updateLab } = require('../controllers/lab.controller')

const router = Router();

router.get('/lab', getAllLabs)



router.get('/lab/10', getLab)


router.post('/lab', createLab)


router.delete('/lab', deleteLab)


router.put('/lab', updateLab)


module.exports = router;