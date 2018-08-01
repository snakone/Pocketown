const express = require('express');  // Require Expres Module
const cors = require('cors');
const routes = require('./routes/routes');  // Require API Routes
const app = express();  // Init Express on APP


// Sever SETTING

app.set('port', process.env.PORT || 3000);  // S.O Port or Port 3000
app.engine('html', require('ejs').renderFile);  // Render HTML on Server
app.set('view engine', 'ejs');

// Middlewares

app.use(cors());
app.use(express.json());  // Body Parse to JSON

// Routes

app.use(routes);


app.listen(app.get('port'), () => {  // Server listen on Port 3000
  console.log('Server on Port', app.get('port'));
})
