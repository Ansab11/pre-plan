
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const classRoutes = require('./routes/Routes');
require('dotenv').config();
const cors = require('cors');

const mongoURI = process.env.MONGO_URI;

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests only from your React frontend
  }));
app.use(express.json());
app.use('/api', classRoutes);


// MongoDB connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB:', err));
// Routes
app.get('/', (req, res) => {
    res.send('Class Scheduler Backend');
});

// Listen on port 5000
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server running on port ${port}`));
