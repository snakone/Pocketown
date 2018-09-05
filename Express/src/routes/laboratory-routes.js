const LaboratoryRouter = require('express').Router();  // Express Router

const laboratory = require('../controllers/laboratory.controller');  // Controller

// When server gets 'URL', Respond with a JSON

// LABORATORY Routes

LaboratoryRouter.get('/laboratory', laboratory.filterPokemon);  // Filter Pokémon

module.exports = LaboratoryRouter;  // Export router - Export Class on TypeScript
