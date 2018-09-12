const mongoose = require('mongoose');  // MongoDb
const { Schema } = mongoose;  // Only need Schema

const trainerSchema = new Schema ({  // Move Model
  'trainerID': {type: String, required: true},
  'name': {type: String, required: true, index: { unique: true }},
  'pokemon': {type: String, required: true},
  'avatar': {type: String, required: true},
  'server': {type: String, required: true},
  'guild': {type: String, required: true}
});
// Set Move Schema as mongoose Model
module.exports = mongoose.model('user', trainerSchema);
// MongoDB will create a Collection 'User' -> 'users'
