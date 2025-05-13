const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const accountRoutes = require('./routes/accountRoutes');

const app = express();
const port = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000, // รอเชื่อมต่อ 10 วินาที
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ Failed to connect to MongoDB:', err));

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api', accountRoutes);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
app.get('/', (req, res) => {
  res.send('✅ API is running!');
});
