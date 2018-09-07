const moveRouter = require('express').Router();  // Express Router

const move = require('../controllers/move.controller');  // Controller

// When server gets 'URL', Respond with a JSON

// MOVES Routes

moveRouter.post('/moves', move.addMove); // Add Move to MongoDB
moveRouter.get('/moves', move.getMove);  // Get All Moves
moveRouter.get('/moves/:id', move.getMovebyId);  // Get Move by ID
moveRouter.get('/move_name', move.getMoveTypebyName);  // Get Move by Name
moveRouter.put('/moves/:id', move.updateMove);  // Update Move by ID
moveRouter.delete('/moves/:id', move.deleteMove);  // Delete Move from MongoDB

module.exports = moveRouter;  // Export router - Export Class on TypeScript
