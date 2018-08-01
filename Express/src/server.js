const express = require('express');  // Require Expres Module
const morgan = require('morgan');  // Console Logger
const { moongose } = require('./database');  // Only need the Connection
const pokemon = require('./routes/routes');  // Require API Pokemon

const app = express();  // Init Express on APP

// Sever SETTING

app.set('port', process.env.PORT || 3000);  // S.O Port or Port 3000

// Middlewares

app.use(morgan('dev'));  // Use Morgan with DEV command prompt
app.use(express.json());  // Body Parse to JSON

// Routes

app.use('/pokedex', pokemon);

// Listening

app.listen(app.get('port'), () => {  // Server listen on Port 3000
  console.log('Server on Port', app.get('port'));
})
