const pokemonRouter = require('express').Router();  // Express Router

const pokemon = require('../controllers/pokemon.controller');  // Controller

// When server gets 'URL', Respond with a JSON

// POKEDEX Routes

pokemonRouter.post('/pokemon', pokemon.addPokemon); // Add Pokémon to MongoDB
pokemonRouter.get('/pokemon', pokemon.getPokemon);  // Get Pokedex Pokemon
pokemonRouter.get('/pokemon/:id', pokemon.getPokemonbyId);  // Get Pokemon by ID
pokemonRouter.get('/pokemon_name', pokemon.getPokemonbyName);  // Get Pokemon by Name
pokemonRouter.put('/pokemon/:id', pokemon.updatePokemon);  // Update Pokemon by ID
pokemonRouter.delete('/pokemon/:id', pokemon.deletePokemon);  // Delete Pokemon from MongoDB

module.exports = pokemonRouter;  // Export router - Export Class on TypeScript
