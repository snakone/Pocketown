const pokemons = require('../models/pokemon');  // Pokemon Model = MongoDB Collection

const adminCtrl = {};  // Create Object. We add Methods to it so We can use them OUTSIDE later

// req: Request - res: Response  // async - await // Wait for MongoDB

adminCtrl.addPokemon = async (req, res) => {  // Add Pokemon to MongoDB

  const pokemon = new pokemons(req.body);  // Get the html Body -> Pokemon Object
  await pokemon.save();  // Save on MongoDB
  res.json('Pokémon Saved');
}

adminCtrl.getPokemon = async (req, res) => {  // Get ALL Pokemon

    const pokemon = await pokemons.find() // Find Pokemon in MongoDB
     .sort({ pokedex: + 1 });  // Sort Pokemon by Pokedex DESC
    res.json(pokemon);  // Send Pokémon to server as JSON
}

adminCtrl.getPokemonbyId = async (req, res) => {  // Get Pokemon by ID

    const pokemon = await pokemons.findById(req.params.id);  // Find by ID
    res.json(pokemon);  // Send Pokémon to server as JSON
}

adminCtrl.getPokemonbyName = async (req, res) => {  // Get Pokémon ID by Name

  const filterPokemon = new RegExp(`^${req.query.name}`);  //  Template String ES6 Pattern
  const pokemon = await pokemons.find({ picture: filterPokemon});  // "/^MegaCharizardX/" Pattern
  res.json(pokemon);  // Send Pokémon to server as JSON

}

adminCtrl.updatePokemon = async (req, res) => {  // Update Pokemon

   const { id } = req.params;  // From req.params only need ID
   const pokemon = req.body; // Pokémon with updated INFO

   await pokemons.findByIdAndUpdate(id, {$set: pokemon},  // Find by ID and Update in MongoDB
                                        {new: true});  // New Pokemon if ID not Match
     res.json({
       status: "Pokemon Updated"
     });
}

adminCtrl.deletePokemon = async (req, res) => {  // Remove Pokémon from MongoDB

  await pokemons.findByIdAndRemove(req.params.id);  // Remove by ID
  res.json({
    status: "Pokemon Deleted"
  });
}

module.exports = adminCtrl;  // Exports the Object with all the Methods
