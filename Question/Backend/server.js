const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const questionRoutes = require('./routes/routes');
const authRoutes = require('./routes/auth.routes'); 

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/quizdb')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB Connection Error:', err));

app.use('/api/questions', questionRoutes);
app.use('/api/auth', authRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
