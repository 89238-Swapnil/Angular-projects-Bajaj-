const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ MongoDB connected");
    return client.db("quizdb");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
  }
}

module.exports = connectDB;
