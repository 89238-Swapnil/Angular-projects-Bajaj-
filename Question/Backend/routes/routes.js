// // const express = require('express');
// // const router = express.Router();
// // const Question = require('../model/Question'); // your Question model

// // // Get all topics (distinct)
// // router.get('/topics', async (req, res) => {
// //   try {
// //     const topics = await Question.distinct('topic'); // fetch distinct topics
// //     res.json(topics);
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // });

// // module.exports = router;
// const express = require('express');
// const router = express.Router();
// const Question = require('../model/model');

// // Get all topics (distinct)
// router.get('/topics', async (req, res) => {
//   try {
//     const topics = await Question.distinct('topic');
//     res.json(topics);
//   } catch (err) {
//     console.error('Error fetching topics:', err);
//     res.status(500).json({ message: err.message });
//   }
// });
// // Get 10 questions for a given topic
// router.get('/:topic', async (req, res) => {
//   try {
//     const topic = req.params.topic;
//     const questions = await Question.find({ topic }).limit(10); // max 10
//     res.json(questions);
//   } catch (err) {
//     console.error('Error fetching questions:', err);
//     res.status(500).json({ message: err.message });
//   }
// });


// module.exports = router;
const express = require('express');
const router = express.Router();
const Question = require('../model/model');

// Get all topics
router.get('/topics', async (req, res) => {
  try {
    const topics = await Question.distinct('topic');
    res.json(topics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get questions by topic (10 per topic)
router.get('/:topic', async (req, res) => {
  try {
    const topicName = req.params.topic;
    const questions = await Question.find({ topic: topicName }).limit(10);
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
