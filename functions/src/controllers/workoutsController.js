// src/controllers/workoutsController.js
const { db } = require('../config/firebase');

//----------------------------------------------------------------------//
// Chest workout
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
//----------------------------------------------------------------------//
//----------------------Muscle Group Workouts---------------------------/
// Forearms Workout
const getForearmsWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Wrist Curl", sets: 4, reps: 12 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Biceps Workout
const getBicepsWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Bicep Curl", sets: 4, reps: 10 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Triceps Workout
const getTricepsWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Tricep Extension", sets: 4, reps: 12 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Deltoids Workout
const getDeltoidsWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Shoulder Press", sets: 4, reps: 10 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Pectorals Workout
const getPectoralsWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Bench Press", sets: 4, reps: 8 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Rotator Cuff Workout
const getRotatorCuffWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Internal Rotation", sets: 3, reps: 15 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Upper Back Workout
const getUpperBackWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Pull-Up", sets: 4, reps: 8 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Trapezius Workout
const getTrapeziusWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Shrugs", sets: 4, reps: 12 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Paravertebrals Workout
const getParavertebralsWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Back Extension", sets: 3, reps: 12 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Lower Back Workout
const getLowerBackWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Deadlift", sets: 4, reps: 6 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Gluteus Workout
const getGluteusWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Hip Thrust", sets: 4, reps: 10 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Hamstrings Workout
const getHamstringsWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Leg Curl", sets: 4, reps: 12 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Calves Workout
const getCalvesWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Calf Raise", sets: 4, reps: 15 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Abdominals Workout
const getAbdominalsWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Crunches", sets: 4, reps: 20 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Oblique Workout
const getObliqueWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Side Plank", sets: 3, reps: 30 } // seconds
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
// Adductors Workout
const getAdductorsWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Adductor Machine", sets: 4, reps: 12 }
    };
    res.json(workout);
};

// Quadriceps Workout
const getQuadricepsWorkout = async (req, res) => {
    const workout = {
        exercise: { name: "Leg Press", sets: 4, reps: 10 }
    };
    res.json(workout);
};
//----------------------------------------------------------------------//
//----------------------------------------------------------------------//
// Add custom workout to Firestore
const addUserWorkout = async (req, res) => {
    const {userId} = req.params;
    const { workoutName, exercises } = req.body;

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
// get user workouts
const getUserWorkouts = async (req, res) => {
    const {userId} = req.params;

    try {
       

        const workoutsRef = db.collection('users').doc(userId).collection('workouts');
        const snapshot = await workoutsRef.get();
       if (snapshot.empty) {
        res.status(500).json({ message: 'Workout does not exist' });
        return;
   }
   const workouts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
   res.status(200).json(workouts);
    } catch (error) {
        res.status(500).json({ message: 'Error saving workout', error });
    }
};
//----------------------------------------------------------------------//
// get user workouts
const getUserWorkout = async (req, res) => {
    const {userId, workoutId} = req.params;

    try {
        const workouts = await db.collection('users').doc(userId).collection('workouts').doc(workoutId).get();

        if (!workouts.exists) {
            res.status(500).json({ message: 'Workout does not exist' });
            return;
        }
        res.status(200).json(workouts.data());
    } catch (error) {
        res.status(500).json({ message: 'Error saving workout', error });
    }
};
//----------------------------------------------------------------------//

module.exports = { 
    getUserWorkout,
    getUserWorkouts,
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
    addUserWorkout,
    deleteUserWorkout
};
//----------------------------------------------------------------------//