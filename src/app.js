// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//----------------------------------------------------------------------//
// Import routes
const workoutRoutes = require('./routes/workouts');
//----------------------------------------------------------------------//
// Initialize Express app
const app = express();
//----------------------------------------------------------------------//
// Middleware
app.use(cors());
app.use(bodyParser.json());
//----------------------------------------------------------------------//
// API routes
app.use('/api/workouts', workoutRoutes);
//----------------------------------------------------------------------//
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//----------------------------------------------------------------------//