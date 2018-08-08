const express = require('express');  // Require Express Module
const morgan = require('morgan');  // Console Logger
const cors = require('cors'); //  Bind Server and Angular
const { moongose } = require('./database');  // Only need the Connection
const pokedex = require('./routes/pokedex-routes');  // Require API Pokemon
const laboratory = require('./routes/laboratory-routes');  // Require API Pokemon
const admin = require('./routes/admin-routes');  // Require API Pokemon

const app = express();  // Init Express on APP

// Server SETTING

app.set('port', process.env.PORT || 3000);  // S.O Port or Port 3000

// Middlewares

app.use(morgan('dev'));  // Use Morgan with DEV command prompt
app.use(express.json());  // Body Parse to JSON
app.use(cors({origin: "http://localhost:4200"}));  // Use Cors to connect Angular

// Routes

app.use('/', pokedex);  // Pokedex Route
app.use('/', laboratory);  // Laboratory Route
app.use('/', admin);  // Admin Route

// Listening

app.listen(app.get('port'), () => {  // Server listen on Port 3000
  console.log('Server on Port', app.get('port'));
})
