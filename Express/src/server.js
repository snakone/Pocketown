const express = require('express');  // Require Express Module
const morgan = require('morgan');  // Console Logger
const cors = require('cors'); //  Bind Server and Angular
const { moongose } = require('./database');  // Only need the Connection
const pokedex = require('./routes/pokedex-routes');  // Require API Pokedex
const laboratory = require('./routes/laboratory-routes');  // Require API Laboratory
const pokemon = require('./routes/pokemon-routes');  // Require API Admin Pokemon
const move = require('./routes/move-routes');  // Require API Admin Move
const pokeItem = require('./routes/poke-items-routes');  // Require API Poke Items

const app = express();  // Init Express on APP

// Server SETTING

app.set('port', process.env.PORT || 3000);  // S.O Port or Port 3000

// Middlewares

app.use(morgan('dev'));  // Use Morgan with DEV command prompt
app.use(express.json());  // Body Parse to JSON
app.use(cors({origin: "http://localhost:4200"}));  // Use Cors to connect Angular


// var allowedOrigins = ['http://pocketown-angular.epizy.com',
//                       'http://pocketown-testing.epizy.com'];  // Allowed URLs
//
// app.use(cors({
//   origin: function(origin, callback){
//     // allow requests with no origin
//     // (like mobile apps or curl requests)
//     if(!origin) return callback(null, true);
//     if(allowedOrigins.indexOf(origin) === -1){
//       var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true); // Return Connection
//   }
// }));

// Routes

app.use('/', pokedex);  // Pokedex Route
app.use('/', laboratory);  // Laboratory Route
app.use('/', pokemon);  // Admin Route
app.use('/', move);  // Pokemon Move Route
app.use('/', pokeItem);  // Pokemon Move Route

// Listening

app.listen(app.get('port'), () => {  // Server listen on Port 3000
  console.log('Server on Port', app.get('port'));
})
