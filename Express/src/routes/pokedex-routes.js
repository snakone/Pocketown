const pokedexRouter = require('express').Router();  // Express Router

const pokedex = require('../controllers/pokedex.controller');  // Controller

// When server gets 'URL', Respond with a JSON

// POKEDEX Routes

pokedexRouter.get('/pokedex', pokedex.getPokedex);  // Get Pokedex Pokemon
pokedexRouter.get('/pokedex/:id', pokedex.getPokemonbyId);  // Get Pokedex Pokemon
pokedexRouter.get('/pokedex/family/:family', pokedex.getFamily);  // Get Pokemon Family

module.exports = pokedexRouter;  // Export router - Export Class on TypeScript
