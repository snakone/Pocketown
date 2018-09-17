const trainerRouter = require('express').Router();  // Express Router

const trainer = require('../controllers/trainer.controller');  // Controller

// When server gets 'URL', Respond with a JSON

// Trainer Routes

trainerRouter.post('/trainer', trainer.addTrainer);  // Add New Trainer
trainerRouter.put('/trainer/status/:id', trainer.updateStatus);  // Online Status
trainerRouter.get('/trainer', trainer.getTrainers);  // Get Trainers
trainerRouter.get('/trainer/:id', trainer.getTrainerbyID);  // Get Trainer by ID
trainerRouter.get('/trainer/name/:name', trainer.getTrainerbyName);  // Online Status
trainerRouter.put('/trainer/:id', trainer.updateTrainer);  // Update Trainer by ID
trainerRouter.delete('/trainer/:id', trainer.deleteTrainer);  // Delete Trainer from MongoDB

module.exports = trainerRouter;  // Export router - Export Class on TypeScript
