require('dotenv').config();

const config = {
  port: process.env.PORT || 3001,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  huggingFace: {
    apiUrl: 'https://api-inference.huggingface.co/models/gpt2', // ✔️ ใช้ได้กับ GPT2 แต่ต้องแน่ใจว่า model รองรับ POST
    apiKey: process.env.HUGGING_FACE_API_KEY,
  },
  
};

if (!config.mongoUri || !config.jwtSecret || !config.huggingFace.apiKey) {
  throw new Error("❌ Missing essential environment variables in .env");
}

module.exports = config;
