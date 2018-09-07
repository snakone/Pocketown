const pokeItemsRouter = require('express').Router();  // Express Router

const pokeItem = require('../controllers/poke-item.controller');  // Controller

// When server gets 'URL', Respond with a JSON

// MOVES Routes

pokeItemsRouter.post('/held-items', pokeItem.addpokeItem); // Add pokeItem to MongoDB
pokeItemsRouter.get('/held-items', pokeItem.getpokeItem);  // Get pokeItem
pokeItemsRouter.get('/held-items/:id', pokeItem.getpokeItembyId);  // Get pokeItem by ID
pokeItemsRouter.get('/held-item_name', pokeItem.getpokeItembyName);  // Get pokeItem by Name
pokeItemsRouter.put('/held-items/:id', pokeItem.updatepokeItem);  // Update pokeItem by ID
pokeItemsRouter.delete('/held-items/:id', pokeItem.deletepokeItem);  // Delete pokeItem from MongoDB

module.exports = pokeItemsRouter;  // Export router - Export Class on TypeScript
