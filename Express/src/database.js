const mongoose = require('mongoose');  // MongoDB

// MongoDB URI Driver String Node.js
const URI = 'mongodb+srv://Snakone:pocketvilla@cluster0-ov8vp.mongodb.net/Pocketown?retryWrites=true';
// Make Password on another FILE

mongoose.connect(URI, { useNewUrlParser: true })  // New Parse Mode
  .then(db => console.log('DB is connected'))  // Promise
  .catch(err => console.error(err));

module.exports = mongoose;   // Export mongoose - Export Class on TypeScript
