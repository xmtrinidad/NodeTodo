const express = require('express');
const app = express();

// Controllers
const todoController = require('./controllers/todoController');
todoController(app);

// Static files
app.use(express.static('./public'));

// Set up template engine
app.set('view engine', 'ejs');

// Listen to port
app.listen(3000);
console.log('listening on port 3000');