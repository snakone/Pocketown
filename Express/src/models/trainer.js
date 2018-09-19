const mongoose = require('mongoose');  // MongoDb
const { Schema } = mongoose;  // Only need Schema

const trainerSchema = new Schema ({  // Move Model
  'trainerID': {type: String, required: true},
  'name': {type: String, required: true, index: { unique: true }},
  'pokemon': {type: String, required: true},
  'team': {type: Array, required: false},
  'avatar': {type: String, required: true},
  'server': {type: String, required: true},
  'guild': {type: String, required: true},
  'online': {type: Boolean, required: true}
});
// Set Move Schema as mongoose Model
module.exports = mongoose.model('trainer', trainerSchema);
// MongoDB will create a Collection 'Trainer' -> 'trainers'
