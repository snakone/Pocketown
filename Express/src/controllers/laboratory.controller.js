const pokemons = require('../models/pokemon');  // Pokemon Model = MongoDB Collection

const laboratoryCtrl = {};  // Create Object. We add Methods to it so We can use them OUTSIDE later

// req: Request - res: Response  // async - await // Wait for MongoDB

laboratoryCtrl.filterPokemon = async (req, res) => {
  // RegExp create Regular Expression Object from a string Pattern = Type
  console.log(req.query.type);
  if (req.query.type == "Any") req.query.type = ".*?";
    const filterType = new RegExp(`^${req.query.type}`);  //  Template String ES6
    const filterStat = new Object();

    filterStat[req.query.stat] = - 1;
    if (req.query.stat == "pokedex") filterStat[req.query.stat] = + 1;
    const pokemon = await pokemons.find({ $or: [{type: filterType},
                                                {type2: filterType}]
    }).sort(filterStat);  // Sort Pokemon by Pokedex DESC
    res.json(pokemon);  // Send Pokemon to server as JSON
}


module.exports = laboratoryCtrl;  // Exports the Object with all the Methods
