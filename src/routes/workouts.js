// src/routes/workouts.js
const express = require('express');

const { 
    getChestDayWorkout, 
    getLegDayWorkout, 
    getBackDayWorkout, 
    getArmDayWorkout, 
    getForearmsWorkout,
    getBicepsWorkout,
    getTricepsWorkout,
    getDeltoidsWorkout,
    getPectoralsWorkout,
    getRotatorCuffWorkout,
    getUpperBackWorkout,
    getTrapeziusWorkout,
    getParavertebralsWorkout,
    getLowerBackWorkout,
    getGluteusWorkout,
    getHamstringsWorkout,
    getCalvesWorkout,
    getAbdominalsWorkout,
    getObliqueWorkout,
    getAdductorsWorkout,
    getQuadricepsWorkout,
    saveUserWorkout,
    deleteUserWorkout
} = require('../controllers/workoutsController');
//----------------------------------------------------------------------//
const router = express.Router();

// Routes for exercise routines
router.get('/chest-day', getChestDayWorkout);
router.get('/leg-day', getLegDayWorkout);
router.get('/back-day', getBackDayWorkout);
router.get('/arm-day', getArmDayWorkout);
router.post('/save', saveUserWorkout);

// Routes for each muscle group
router.get('/forearms', getForearmsWorkout);
router.get('/biceps', getBicepsWorkout);
router.get('/triceps', getTricepsWorkout);
router.get('/deltoids', getDeltoidsWorkout);
router.get('/pectorals', getPectoralsWorkout);
router.get('/rotator-cuff', getRotatorCuffWorkout);
router.get('/upper-back', getUpperBackWorkout);
router.get('/trapezius', getTrapeziusWorkout);
router.get('/paravertebrals', getParavertebralsWorkout);
router.get('/lower-back', getLowerBackWorkout);
router.get('/gluteus', getGluteusWorkout);
router.get('/hamstrings', getHamstringsWorkout);
router.get('/calves', getCalvesWorkout);
router.get('/abdominals', getAbdominalsWorkout);
router.get('/oblique', getObliqueWorkout);
router.get('/adductors', getAdductorsWorkout);
router.get('/quadriceps', getQuadricepsWorkout);
//----------------------------------------------------------------------//
// DELETE route: Delete a specific user workout by workoutId
router.delete('/user/:userId/workout/:workoutId', deleteUserWorkout);

module.exports = router;