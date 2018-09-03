const adminRouter = require('express').Router();  // Express Router

const admin = require('../controllers/admin.controller');  // Controller

// When server gets 'URL', Respond with a JSON

// POKEDEX Routes

adminRouter.post('/admin/pokemon', admin.addPokemon); // Add Pokemon to MongoDB
adminRouter.get('/admin/pokemon', admin.getPokemon);  // Get Pokedex Pokemon
adminRouter.get('/admin/pokemon/:id', admin.getPokemonbyId);  // Get Pokemon by ID
adminRouter.get('/admin/pokemon_name', admin.getPokemonbyName);  // Get Pokemon by ID
adminRouter.put('/admin/pokemon/:id', admin.updatePokemon);  // Update Pokemon by ID
adminRouter.delete('/admin/pokemon/:id', admin.deletePokemon);  // Delete Pokemon from MongoDB

module.exports = adminRouter;  // Export router - Export Class on TypeScript
