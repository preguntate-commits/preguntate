const { Router } = require('express');
const userRouter = require('./userRoutes');
const questionRouter = require('./questionRoutes');
const unconfirmedQuestionRouter = require('./unconfirmedQuestionRoutes');

const router = Router();

router.use('/user', userRouter);
router.use('/questions', questionRouter)
router.use('/unconfirmedQuestions', unconfirmedQuestionRouter)

module.exports = router;