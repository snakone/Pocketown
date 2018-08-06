const router = require('express').Router();  // Express Router

const pokemon = require('../controllers/pokemon.controller');  // Controller

// When server gets 'URL', Respond with a JSON

// POKEDEX Routes

router.post('/', pokemon.addPokemon); // Add Pokemon to MongoDB
router.get('/', pokemon.getPokemon);  // Get All Pokemon
router.get('/:id', pokemon.getPokemonbyId);  // Get Pokemon by ID
router.put('/:id', pokemon.updatePokemon);  // Update Pokemon by ID
router.delete('/:id', pokemon.deletePokemon);  // Delete Pokemon from MongoDB


module.exports = router;  // Export router - Export Class on TypeScript
