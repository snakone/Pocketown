const pokemonModel = require('../models/pokemon');  // Pokemon Model

const pokemonCtrl = {};  // Create Object

// req: Request - res: Response  // async - await // Wait for MongoDB

pokemonCtrl.addPokemon = async (req, res) => {  // Add Pokemon to MongoDB

  const pokemon = new pokemonModel(req.body);
  await pokemon.save();  // Save on MongoDB
  res.json('Pokémon Guardado');
}

//
pokemonCtrl.getPokemon = async (req, res) => {  // Get ALL Pokemon

    const pokemon = await pokemonModel.find();  // Find Pokemon in MongoDB
    res.json(pokemon);  // Send Pokemon to server as JSON
}

pokemonCtrl.getPokemonbyId = async (req, res) => {  // Get Pokemon by ID

    const pokemon = await pokemonModel.findById(req.params.id);  // Find by ID
    res.json(pokemon);  // Send Pokemon to server as JSON
}

pokemonCtrl.updatePokemon = async (req, res) => {  // Update Pokemon

   const { id } = req.params;  // From req.params only need ID
   const pokemon = {  // Pokemon with updated INFO
     name: req.body.name,
     pokedex: req.body.pokedex,
     grade: req.body.grade,
     ss: req.body.ss
   }
    await pokemonModel.findByIdAndUpdate(id, {$set: pokemon},  // Find by ID and Update in MongoDB
                                             {new: true});  // New Pokemon if ID not Match
     res.json({
       status: "Pokemon actualizado"
     });
}

pokemonCtrl.deletePokemon = async (req, res) => {  // Remove Pokemon from MongoDB

  await pokemonModel.findByIdAndRemove(req.params.id);  // Remove by ID
  res.json({
    status: "Pokemon Eliminado"
  });
}

module.exports = pokemonCtrl;
