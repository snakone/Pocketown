const mongoose = require('mongoose');

const URI = 'mongodb+srv://Snakone:pocketvilla@cluster0-ov8vp.mongodb.net/Pocketown?retryWrites=true';  // Replace with real URL

mongoose.connect(URI, { useNewUrlParser: true })
  .then(db => console.log('DB is connected'))  // Promise
  .catch(err => console.error(err));

module.exports = mongoose;   // Export mongoose - Export Class on TypeScript

puto GitHub!
