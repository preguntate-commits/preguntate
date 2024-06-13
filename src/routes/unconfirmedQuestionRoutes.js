const express = require('express')
const { getUnconfirmedQuestions, postUnconfirmedQuestion, removeUnconfirmedQuestion } = require('../controllers/unconfirmedQuestionControllers')

const router = express.Router()

router.get('/all', getUnconfirmedQuestions)
router.post('/nuevaPreguntaSinConfirmar', postUnconfirmedQuestion)
router.delete('/:_id', removeUnconfirmedQuestion)

module.exports = router 