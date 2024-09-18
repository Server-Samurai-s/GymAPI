// src/routes/workouts.js
const express = require('express');

const { 
    getChestDayWorkout, 
    getLegDayWorkout, 
    getBackDayWorkout, 
    getArmDayWorkout, 
    saveUserWorkout,
    deleteUserWorkout
} = require('../controllers/workoutsController');
//----------------------------------------------------------------------//
const router = express.Router();

// Route to get chest day workout
router.get('/chest-day', getChestDayWorkout);

// Route to get leg day workout
router.get('/leg-day', getLegDayWorkout);

// Route to get back day workout
router.get('/back-day', getBackDayWorkout);

// Route to get arm day workout
router.get('/arm-day', getArmDayWorkout);

// Route to save a custom workout
router.post('/save', saveUserWorkout);

// DELETE route: Delete a specific user workout by workoutId
router.delete('/user/:userId/workout/:workoutId', deleteUserWorkout);

module.exports = router;