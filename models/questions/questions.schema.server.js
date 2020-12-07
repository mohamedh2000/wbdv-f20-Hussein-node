
const mongoose = require('mongoose');
const databaseName = 'whiteboard';
var connectionString = 'mongodb://localhost/' + databaseName;
mongoose.connect(connectionString, {useNewUrlParser:true});

const questionsSchema = mongoose.Schema({
    _id: String,
    title: String, 
    question:String, 
    correct: String, 
    answer: String, 
    type:{type:String, enum:['TRUE_FALSE', 'MULTIPLE_CHOICE', 'ESSAY']},
    choices:[String]
}, {collection:'questions'});

module.exports = questionsSchema