const express = require('express')
const { getQuestions, getPersonales, getProfundas, getCasuales, getPicantesGrupales, getYoNuncaNunca, 
getQuePrefieresSituaciones, getQuePrefieresCosas, getAnecdotaDe, getSoyMasDe, getTopTres, getRetoOShot, 
getRetos, getQuienDeTusAmigosEs, getMatarCogerOCasarse, getQuePrefieresBizarro, getFrasesQueSePuedenDecirEnElSexoY,
addLike, addDislike, postQuestion, removeQuestion, postAdminQuestion, removeUserQuestion } = require('../controllers/questionControllers')

const router = express.Router()

router.get('/all', getQuestions)
router.get('/personales', getPersonales)
router.get('/profundas', getProfundas)
router.get('/casuales', getCasuales)
router.get('/picantes', getPicantesGrupales)
router.get('/yoNuncaNunca', getYoNuncaNunca)
router.get('/quePrefieresSituaciones', getQuePrefieresSituaciones)
router.get('/quePrefieresCosas', getQuePrefieresCosas)
router.get('/anecdota', getAnecdotaDe)
router.get('/soyMasDe', getSoyMasDe)
router.get('/top', getTopTres)
router.get('/retooshot', getRetoOShot)
router.get('/retos', getRetos)
router.get('/quienDeTusAmigos', getQuienDeTusAmigosEs)
router.get('/matarCogerOCasarse', getMatarCogerOCasarse)
router.get('/quePrefieresBizarro', getQuePrefieresBizarro)
router.get('/frasesQueSePuedenDecirEnElSexoY', getFrasesQueSePuedenDecirEnElSexoY)
router.patch('/:_id/like', addLike)
router.patch('/:_id/dislike', addDislike)
router.post('/nuevaPregunta', postQuestion)
router.post('/nuevaPreguntaAdmin', postAdminQuestion)
router.delete('/:_id', removeQuestion)
router.delete('/:user/:_id', removeUserQuestion)

module.exports = router 