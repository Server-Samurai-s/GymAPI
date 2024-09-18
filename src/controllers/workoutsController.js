// src/controllers/workoutsController.js
const { db } = require('../config/firebase');

// Get predefined chest workout
const getChestDayWorkout = async (req, res) => {
    const chestWorkout = {
        exercise1: { name: "Bench Press", sets: 4, reps: 8 },
        exercise2: { name: "Incline Bench Press", sets: 4, reps: 8 },
        exercise3: { name: "Dumbbell Flyes", sets: 4, reps: 10 },
    };
    res.json(chestWorkout);
};
//----------------------------------------------------------------------//
// Leg Day Workout
const getLegDayWorkout = async (req, res) => {
    const legWorkout = {
        exercise1: { name: "Squat", sets: 4, reps: 10 },
        exercise2: { name: "Lunges", sets: 3, reps: 12 },
        exercise3: { name: "Leg Press", sets: 4, reps: 10 },
    };
    res.json(legWorkout);
};
//----------------------------------------------------------------------//
// Back Day Workout
const getBackDayWorkout = async (req, res) => {
    const backWorkout = {
        exercise1: { name: "Deadlift", sets: 4, reps: 6 },
        exercise2: { name: "Pull-ups", sets: 4, reps: 8 },
        exercise3: { name: "Barbell Rows", sets: 4, reps: 10 },
    };
    res.json(backWorkout);
};
//----------------------------------------------------------------------//
// Arm Day Workout
const getArmDayWorkout = async (req, res) => {
    const armWorkout = {
        exercise1: { name: "Bicep Curls", sets: 4, reps: 12 },
        exercise2: { name: "Tricep Dips", sets: 4, reps: 10 },
        exercise3: { name: "Hammer Curls", sets: 4, reps: 12 },
    };
    res.json(armWorkout);
};
//----------------------------------------------------------------------//
// Save custom workout to Firestore
const saveUserWorkout = async (req, res) => {
    const { userId, workoutName, exercises } = req.body;

    try {
        await db.collection('users').doc(userId).collection('workouts').add({
            workoutName,
            exercises,
        });
        res.status(200).json({ message: 'Workout saved successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving workout', error });
    }
};
//----------------------------------------------------------------------//
// DELETE a user workout by workout ID
const deleteUserWorkout = async (req, res) => {
    const { userId, workoutId } = req.params;

    try {
        // Reference to the user's specific workout
        const workoutRef = db.collection('users').doc(userId).collection('workouts').doc(workoutId);
        
        // Check if the workout exists before deleting
        const workoutDoc = await workoutRef.get();
        if (!workoutDoc.exists) {
            return res.status(404).json({ message: 'Workout not found' });
        }

        // Delete the workout
        await workoutRef.delete();
        res.status(200).json({ message: 'Workout deleted successfully' });
    } catch (error) {
        console.error("Error deleting workout:", error);
        res.status(500).json({ message: 'Error deleting workout', error });
    }
};
//----------------------------------------------------------------------//
module.exports = { 
    getChestDayWorkout, 
    getLegDayWorkout, 
    getBackDayWorkout, 
    getArmDayWorkout, 
    saveUserWorkout,
    deleteUserWorkout
};
//----------------------------------------------------------------------//