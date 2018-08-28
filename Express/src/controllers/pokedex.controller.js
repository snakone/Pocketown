const pokemons = require('../models/pokemon');  // Pokemon Model = MongoDB Collection

const pokedexCtrl = {};  // Create Object. We add Methods to it so We can use them OUTSIDE later

// req: Request - res: Response  // async - await // Wait for MongoDB

pokedexCtrl.getPokedex = async (req, res) => {  // Get Pokedex Pokemon
    // Find Pokemon in MongoDB - Pokedex only need Picture and Name
    const pokemon = await pokemons.find({},{picture: 1, name: 1})
     .sort({ pokedex: + 1 });  // Sort Pokemon by Pokedex ASC
    res.json(pokemon);  // Send Pokemon to server as JSON
}

pokedexCtrl.getPokemonbyId = async (req, res) => {  // Get Pokemon by ID

    const pokemon = await pokemons.findById(req.params.id); // Get the Pokemon ID from params
    res.json(pokemon);  // Send Pokemon to server as JSON
}

pokedexCtrl.getFamily = async (req, res) => {  // Get Pokemon Family

    const filterFamily = new RegExp(`^${req.params.family}`);  //  Template String ES6 Pattern
    const family = await pokemons.find({ family: filterFamily}); // "/^Mega/" Pattern
    res.json(family);  // Send Family to server as JSON
}


module.exports = pokedexCtrl;  // Exports the Object with all the Methods
