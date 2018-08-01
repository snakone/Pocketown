const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/Pocketown';  // Replace with real URL

mongoose.connect(URI, { useNewUrlParser: true })
  .then(db => console.log('DB is connected'))  // Promise
  .catch(err => console.error(err));

module.exports = mongoose;   // Export mongoose - Export Class on TypeScript
