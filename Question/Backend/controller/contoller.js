const { from } = require('rxjs');
const { map, catchError } = require('rxjs/operators');
const Question = require('../model/model');

let cachedQuestions = null; // cache to avoid multiple DB hits

exports.getAllQuestions = (req, res) => {
  if (cachedQuestions) {
    console.log('📦 Returning cached questions');
    return res.json(cachedQuestions);
  }

  from(Question.find()) // fetch all questions at once
    .pipe(
      map(questions => {
        cachedQuestions = questions; // cache in memory
        res.json(questions);
      }),
      catchError(err => {
        res.status(500).json({ message: 'Error fetching questions', err });
        return []; // complete observable
      })
    )
    .subscribe();
};
