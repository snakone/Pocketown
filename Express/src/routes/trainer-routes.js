const trainerRouter = require('express').Router();  // Express Router

const trainer = require('../controllers/trainer.controller');  // Controller

// When server gets 'URL', Respond with a JSON

// Trainer Routes

trainerRouter.post('/trainer', trainer.addTrainer);  // Add New Trainer
trainerRouter.get('/trainer/:id', trainer.getTrainerbyID);  // Get Trainer

module.exports = trainerRouter;  // Export router - Export Class on TypeScript
