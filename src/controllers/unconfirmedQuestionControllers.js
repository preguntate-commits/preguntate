const UnconfirmedQuestion = require("../models/unconfirmedQuestion")
const Question = require("../models/question")

const getUnconfirmedQuestions = async(req, res, next) => {
    try {
        let allUnconfirmedQuestions = await UnconfirmedQuestion.find({})
        res.status(200).json(allUnconfirmedQuestions)
    }
    catch(error) {
        next(error)
    }
}

const postUnconfirmedQuestion = async(req, res) => {
    try {
        const { text, type, user, userId } = req.body
        
        if(text.length < 4) return res.status(400).json({message: "Debe tener un mínimo de 4 caracteres!"})
        if(text.length > 200) return res.status(400).json({message: "Debe tener un máximo de 200 caracteres!"})
        const existingQuestion = await Question.findOne({text})
        if(existingQuestion) return res.status(400).json({message: "Esta pregunta ya existe!"})
        const unconfirmedQuestion = new UnconfirmedQuestion ({
            text,
            type,
            user,
            userId,
        })
        unconfirmedQuestion.save()
        res.status(200).json(unconfirmedQuestion)
    } catch (error) {
        console.log(error)
    }
}

const removeUnconfirmedQuestion = async (req, res, next) => {
    try {
        const { _id } = req.params
        let unconfirmedQuestion = await UnconfirmedQuestion.findOne({_id})
        await unconfirmedQuestion.remove()
        res.status(200).send({message: "Pregunta eliminada!"})
    }
    catch(error) {
        next(error)
    }
}

module.exports = {
    getUnconfirmedQuestions,
    postUnconfirmedQuestion,
    removeUnconfirmedQuestion,
}