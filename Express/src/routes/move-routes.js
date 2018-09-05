const moveRouter = require('express').Router();  // Express Router

const move = require('../controllers/move.controller');  // Controller

// When server gets 'URL', Respond with a JSON

// MOVES Routes

moveRouter.post('/admin/move', move.addMove); // Add Move to MongoDB
moveRouter.get('/admin/move', move.getMove);  // Get All Moves
moveRouter.get('/admin/move/:id', move.getMovebyId);  // Get Move by ID
moveRouter.get('/admin/move_name', move.getMoveTypebyName);  // Get Move by Name
moveRouter.put('/admin/move/:id', move.updateMove);  // Update Move by ID
moveRouter.delete('/admin/move/:id', move.deleteMove);  // Delete Move from MongoDB

module.exports = moveRouter;  // Export router - Export Class on TypeScript
