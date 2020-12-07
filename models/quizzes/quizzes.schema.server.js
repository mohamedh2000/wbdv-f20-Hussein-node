
const mongoose = require('mongoose');
const databaseName = 'whiteboard';
var connectionString = 'mongodb://localhost/' + databaseName;
mongoose.connect(connectionString, {useNewUrlParser:true});

const quizzesSchema = mongoose.Schema({
    _id: String,
    title: String, 
    questions: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'QuestionsModel'
    }]
}, {collection: "quizzes"})

module.exports = quizzesSchema