const mongoose = require('mongoose');  // MongoDb
const { Schema } = mongoose;  // Only need Schema

const MoveSchema = new Schema ({  // Move Model
  'name': {type: String, required: true, index: { unique: true }},
  'z': {type: String, required: true},
  'power': {type: Number, required: true},
  'hit': {type: Number, required: true},
  'pp': {type: Number, required: true},
  'type': {type: String, required: true},
  'attack': {type: String, required: true},
  'info': {type: String, required: true}
});
// Set Pokemon Schema as mongoose Model
module.exports = mongoose.model('Move', MoveSchema);
// MongoDB will create a Collection 'Move' -> 'moves'
