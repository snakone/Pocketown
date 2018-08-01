const pokemonModel = require('../models/pokemon');  // Pokemon Model

const pokemonCtrl = {};  // Create Object

// req: Request - res: Response  // async - await // Wait for MongoDB

pokemonCtrl.addPokemon = async (req, res) => {  // Add Pokemon to MongoDB
  const pokemon = new pokemonModel(req.body);
  await pokemon.save();
  res.json('Pokémon Guardado');
}

//
pokemonCtrl.getPokemon = async (req, res) => {  // Get all Pokemon
  const pokemon = await pokemonModel.find();  // Find Pokemon in MongoDB
  res.json(pokemon);  // Send Pokemon to server as JSON
}

pokemonCtrl.getPokemonbyId = async (req, res) => {  // Get Pokemon by ID
  const pokemon = await pokemonModel.findById(req.params.id);  // Find by ID
  res.json(pokemon);  // Send Pokemon to server as JSON
}

pokemonCtrl.updatePokemon = () => {  // Update Pokemon

}

pokemonCtrl.deletePokemon = () => {  // Remove Pokemon from MongoDB

}

module.exports = pokemonCtrl;
