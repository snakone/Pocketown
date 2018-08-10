const pokemons = require('../models/pokemon');  // Pokemon Model = MongoDB Collection

const laboratoryCtrl = {};  // Create Object. We add Methods to it so We can use them OUTSIDE later

// req: Request - res: Response  // async - await // Wait for MongoDB

laboratoryCtrl.filterPokemon = async (req, res) => {
    // RegExp create Regular Expression Object from a string Pattern = Type
    const filterType = new RegExp(`^${req.query.type}`);  //  Template String ES6 Pattern
    const filterEvolution = new RegExp(`^${req.query.evolution}`);  // Convert Evolution into Pattern
    const filterStat = new Object();  // Create an Object to pass into sort() Method

    if (req.query.stat == "pokedex")  // No Stat?
    filterStat[req.query.stat] = + 1 // Pokedex is sorted ASC
    else filterStat[req.query.stat] = - 1;  // { stat: -1 }

    const pokemon = await pokemons.find({ evolution: filterEvolution,  // Evolution Number
                                          $or: [{type: filterType},  // RegExp Pattern /^Fire/
                                                {type2: filterType}]

    }).sort(filterStat);  // Sort Pokemon by Stat DESC
    res.json(pokemon);  // Send Pokemon to server as JSON
}


module.exports = laboratoryCtrl;  // Exports the Object with all the Methods
