const mongoose = require('mongoose');  // MongoDb
const { Schema } = mongoose;  // Only need Schema

const PokemonSchema = new Schema ({  // Pokemon Model
  'name': {type: String, required: true, index: { unique: true }},
  'pokedex': {type: Number, required: true},
  'grade': {type: String, required: true},
  'SS': {type: Number, required: true},
  'info': {type: String, required: true}
});
// Set Pokemon Schema as mongoose Model
module.exports = mongoose.model('Pokemon', PokemonSchema);
// MongoDB will create a Collection 'Pokemon' -> 'pokemons'
