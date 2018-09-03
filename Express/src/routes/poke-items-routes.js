const pokeItemsRouter = require('express').Router();  // Express Router

const pokeItem = require('../controllers/poke-item.controller');  // Controller

// When server gets 'URL', Respond with a JSON

// MOVES Routes

pokeItemsRouter.post('/admin/pokeItem', pokeItem.addpokeItem); // Add pokeItem to MongoDB
pokeItemsRouter.get('/admin/pokeItem', pokeItem.getpokeItem);  // Get Pokedex pokeItem
pokeItemsRouter.get('/admin/pokeItem/:id', pokeItem.getpokeItembyId);  // Get pokeItem by ID
pokeItemsRouter.get('/admin/pokeItem_name', pokeItem.getpokeItembyName);  // Get pokeItem by Name
pokeItemsRouter.put('/admin/pokeItem/:id', pokeItem.updatepokeItem);  // Update pokeItem by ID
pokeItemsRouter.delete('/admin/pokeItem/:id', pokeItem.deletepokeItem);  // Delete pokeItem from MongoDB

module.exports = pokeItemsRouter;  // Export router - Export Class on TypeScript
