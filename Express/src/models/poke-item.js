const mongoose = require('mongoose');  // MongoDb
const { Schema } = mongoose;  // Only need Schema

const pokeItemSchema = new Schema ({  // Move Model
  'item': {type: String, required: true, index: { unique: true }},
  'grade': {type: String, required: true},
  'picture': {type: String, required: true},
  'type': {type: String, required: true},
  'info': {type: String, required: true}
});
// Set Move Schema as mongoose Model
module.exports = mongoose.model('pokeitem', pokeItemSchema);
// MongoDB will create a Collection 'Move' -> 'moves'
