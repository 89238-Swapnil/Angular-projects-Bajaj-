const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  question: String,
  answer: String,
  topic: String
});

module.exports = mongoose.model('Question', QuestionSchema);
