const Question = require("../models/question")
const UnconfirmedQuestion = require("../models/unconfirmedQuestion")
const User = require("../models/user")

const getQuestions = async(req, res, next) => {
    try {
        let allQuestions = await Question.find({})
        res.status(200).json(allQuestions)
    }
    catch(error) {
        next(error)
    }
}

const getPersonales = async (req, res, next) => {
    const type = "Personales"
    try {
        let questions = await Question.find({type: { $in: type }})
        function shuffleArray(q){
            q.sort(()=> Math.random() - 0.5);
        }
        const filteredQuestions = await Question.find({type: { $in: type }})
        shuffleArray(filteredQuestions)
        res.status(200).json({questions, filteredQuestions})
        }
    catch (error) {
        next(error)
    }
} 

const getProfundas = async (req, res, next) => {
    const type = "Profundas"
    try {
        let questions = await Question.find({type: { $in: type }})
        function shuffleArray(q){
            q.sort(()=> Math.random() - 0.5);
        }
        const filteredQuestions = await Question.find({type: { $in: type }})
        shuffleArray(filteredQuestions)
        res.status(200).json({questions, filteredQuestions})
        }
    catch (error) {
        next(error)
    }
} 

const getCasuales = async (req, res, next) => {
    const type = "Casuales"
    try {
        let questions = await Question.find({type: { $in: type }})
        function shuffleArray(q){
            q.sort(()=> Math.random() - 0.5);
        }
        const filteredQuestions = await Question.find({type: { $in: type }})
        shuffleArray(filteredQuestions)
        res.status(200).json({questions, filteredQuestions})
        }
    catch (error) {
        next(error)
    }
} 

const getPicantesGrupales = async (req, res, next) => {
    const type = "Picantes grupales (+18)"
    try {
        let questions = await Question.find({type: { $in: type }})
        function shuffleArray(q){
            q.sort(()=> Math.random() - 0.5);
        }
        const filteredQuestions = await Question.find({type: { $in: type }})
        shuffleArray(filteredQuestions)
        res.status(200).json({questions, filteredQuestions})
        }
    catch (error) {
        next(error)
    }
} 

const getYoNuncaNunca = async (req, res, next) => {
    const type = "Yo nunca nunca... (+18)"
    try {
        let questions = await Question.find({type: { $in: type }})
        function shuffleArray(q){
            q.sort(()=> Math.random() - 0.5);
        }
        const filteredQuestions = await Question.find({type: { $in: type }})
        shuffleArray(filteredQuestions)
        res.status(200).json({questions, filteredQuestions})
        }
    catch (error) {
        next(error)
    }
} 

const getQuePrefieresSituaciones = async (req, res, next) => {
    const type = "Qué prefieres... (Situaciones)"
    try {
        let questions = await Question.find({type: { $in: type }})
        function shuffleArray(q){
            q.sort(()=> Math.random() - 0.5);
        }
        const filteredQuestions = await Question.find({type: { $in: type }})
        shuffleArray(filteredQuestions)
        res.status(200).json({questions, filteredQuestions})
        }
    catch (error) {
        next(error)
    }
} 

const getQuePrefieresCosas = async (req, res, next) => {
    const type = "Qué prefieres... (Cosas)"
    try {
        let questions = await Question.find({type: { $in: type }})
        function shuffleArray(q){
            q.sort(()=> Math.random() - 0.5);
        }
        const filteredQuestions = await Question.find({type: { $in: type }})
        shuffleArray(filteredQuestions)
        res.status(200).json({questions, filteredQuestions})
        }
    catch (error) {
        next(error)
    }
} 

const getAnecdotaDe = async (req, res, next) => {
    const type = "Anécdota de..."
    try {
        let questions = await Question.find({type: { $in: type }})
        function shuffleArray(q){
            q.sort(()=> Math.random() - 0.5);
        }
        const filteredQuestions = await Question.find({type: { $in: type }})
        shuffleArray(filteredQuestions)
        res.status(200).json({questions, filteredQuestions})
        }
    catch (error) {
        next(error)
    }
} 

const getSoyMasDe = async (req, res, next) => {
    const type = "Soy más de..."
    try {
        let questions = await Question.find({type: { $in: type }})
        function shuffleArray(q){
            q.sort(()=> Math.random() - 0.5);
        }
        const filteredQuestions = await Question.find({type: { $in: type }})
        shuffleArray(filteredQuestions)
        res.status(200).json({questions, filteredQuestions})
        }
    catch (error) {
        next(error)
    }
} 

const getTopTres = async (req, res, next) => {
    const type = "Top 3..."
    try {
        let questions = await Question.find({type: { $in: type }})
        function shuffleArray(q){
            q.sort(()=> Math.random() - 0.5);
        }
        const filteredQuestions = await Question.find({type: { $in: type }})
        shuffleArray(filteredQuestions)
        res.status(200).json({questions, filteredQuestions})
        }
    catch (error) {
        next(error)
    }
} 

const getRetoOShot = async (req, res, next) => {
    const type = "Reto o shot (+18)"
    try {
        let questions = await Question.find({type: { $in: type }})
        function shuffleArray(q){
            q.sort(()=> Math.random() - 0.5);
        }
        const filteredQuestions = await Question.find({type: { $in: type }})
        shuffleArray(filteredQuestions)
        res.status(200).json({questions, filteredQuestions})
        }
    catch (error) {
        next(error)
    }
} 

const getRetos = async (req, res, next) => {
    const type = "Retos"
    try {
        let questions = await Question.find({type: { $in: type }})
        function shuffleArray(q){
            q.sort(()=> Math.random() - 0.5);
        }
        const filteredQuestions = await Question.find({type: { $in: type }})
        shuffleArray(filteredQuestions)
        res.status(200).json({questions, filteredQuestions})
        }
    catch (error) {
        next(error)
    }
} 

const getQuienDeTusAmigosEs = async (req, res, next) => {
    const type = "Quién de tus amigos es..."
    try {
        let questions = await Question.find({type: { $in: type }})
        function shuffleArray(q){
            q.sort(()=> Math.random() - 0.5);
        }
        const filteredQuestions = await Question.find({type: { $in: type }})
        shuffleArray(filteredQuestions)
        res.status(200).json({questions, filteredQuestions})
        }
    catch (error) {
        next(error)
    }
} 

const getMatarCogerOCasarse = async (req, res, next) => {
    const type = "Matar, coger o casarse (versión argentina)"
    try {
        let questions = await Question.find({type: { $in: type }})
        function shuffleArray(q){
            q.sort(()=> Math.random() - 0.5);
        }
        const filteredQuestions = await Question.find({type: { $in: type }})
        shuffleArray(filteredQuestions)
        res.status(200).json({questions, filteredQuestions})
        }
    catch (error) {
        next(error)
    }
} 

const getQuePrefieresBizarro = async (req, res, next) => {
    const type = "Qué Prefieres bizarro (+18)"
    try {
        let questions = await Question.find({type: { $in: type }})
        function shuffleArray(q){
            q.sort(()=> Math.random() - 0.5);
        }
        const filteredQuestions = await Question.find({type: { $in: type }})
        shuffleArray(filteredQuestions)
        res.status(200).json({questions, filteredQuestions})
        }
    catch (error) {
        next(error)
    }
} 

const getFrasesQueSePuedenDecirEnElSexoY = async (req, res, next) => {
    const type = "Frases que se pueden decir en el sexo y..."
    try {
        let questions = await Question.find({type: { $in: type }})
        function shuffleArray(q){
            q.sort(()=> Math.random() - 0.5);
        }
        const filteredQuestions = await Question.find({type: { $in: type }})
        shuffleArray(filteredQuestions)
        res.status(200).json({questions, filteredQuestions})
        }
    catch (error) {
        next(error)
    }
} 

const addLike = async (req, res, next) => {
    const { _id } = req.params
    const { ip } = req.body

    try {
            const question = await Question.findById(_id)
            if(question.ips.includes(ip)) {
                return res.status(400).json({message: "Ya reaccionaste a esta pregunta!"})
            } else {
                question.ips.push(ip)
                question.likes++
                question.save() 
                res.status(200).json(question)
            }
        }
    catch (error) {
        next(error)
    }
} 

const addDislike = async (req, res, next) => {
    const { _id } = req.params
    const { ip } = req.body

    try {
            const question = await Question.findById(_id)
            if(question.ips.includes(ip)) {
                return res.status(400).json({message: "Ya reaccionaste a esta pregunta!"})
            } else {
                question.ips.push(ip)
                question.dislikes++
                question.save()
                res.status(200).json(question)
            }
        }
    catch (error) {
        next(error)
    }
} 

const postQuestion = async(req, res) => {
    try {
        const { text, type, user, _id, userId } = req.body
        const existingQuestion = await Question.findOne({text})
        if(existingQuestion) return res.status(400).json({message: "Esta pregunta ya existe!"})
        const question = new Question ({
            text,
            type,
            user,
            userId,
            likes: 0,
            dislikes: 0,
            ips: [],
        })
        question.save()
        let unconfirmedQuestion = await UnconfirmedQuestion.findOne({_id})
        await unconfirmedQuestion.remove()
        const userDb = await User.findOne({name: user})
        userDb.questions = userDb.questions.concat(question._id)
        userDb.save()
        res.status(200).json(question)
    } catch (error) {
        console.log(error)
    }
}

const postAdminQuestion = async(req, res) => {
    try {
        const { text, type } = req.body
        if(type.length < 1) return res.status(400).json({message: "Elige una sección!"})
        if(text.length < 4) return res.status(400).json({message: "Debe tener un mínimo de 4 caracteres!"})
        if(text.length > 200) return res.status(400).json({message: "Debe tener un máximo de 200 caracteres!"})
        const existingQuestion = await Question.findOne({text})
        if(existingQuestion) return res.status(400).json({message: "Esta pregunta ya existe!"})
        const question = new Question ({
            text,
            type,
            likes: 0,
            dislikes: 0,
            ips: [],
        })
        question.save()
        res.status(200).json(question)
    } catch (error) {
        console.log(error)
    }
}

const removeQuestion = async (req, res, next) => {
    try {
        const { _id } = req.params
        let question = await Question.findOne({_id})
        await question.remove()
        res.status(200).send({message: "Pregunta eliminada!"})
    }
    catch(error) {
        next(error)
    }
}

const removeUserQuestion = async (req, res, next) => {
    try {
        const { _id, user } = req.params
        let question = await Question.findOne({_id})
        const userDb = await User.findOne({name: user})
        const questionId = question._id.toString()
        console.log(userDb)
        userDb.questions = userDb.questions.filter((u) => u._id.toString() !== questionId)
        await question.remove()
        userDb.save()
        res.status(200).send({message: "Pregunta eliminada!"})
    }
    catch(error) {
        next(error)
    }
}

module.exports = {
    getQuestions,
    getPersonales,
    getProfundas,
    getCasuales,
    getPicantesGrupales,
    getYoNuncaNunca,
    getQuePrefieresSituaciones,
    getQuePrefieresCosas,
    getAnecdotaDe,
    getSoyMasDe,
    getTopTres,
    getRetoOShot,
    getRetos,
    getQuienDeTusAmigosEs,
    getMatarCogerOCasarse,
    getQuePrefieresBizarro,
    getFrasesQueSePuedenDecirEnElSexoY,
    addLike,
    addDislike,
    postQuestion,
    postAdminQuestion,
    removeQuestion,
    removeUserQuestion
}