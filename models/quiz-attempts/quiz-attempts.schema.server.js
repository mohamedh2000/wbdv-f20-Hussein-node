
const mongoose = require('mongoose');
const databaseName = 'whiteboard';
var connectionString = 'mongodb://localhost/' + databaseName;
mongoose.connect(connectionString, {useNewUrlParser:true});

const questionSchema = require('../questions/questions.schema.server')
const quizAttempts = mongoose.Schema({
    score: Number, 
    quiz: {type:mongoose.Schema.Types.ObjectId, ref:'QuizzesModel'},
    answer:[questionSchema]
}, {collection:'quizAttempts'})

module.exports = quizAttempts