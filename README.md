#  Node Todo App

This is a basic todo application created using Node.js.  Most of the concepts used to create the app
are taken from [The Net Ninja Node.js Tutorials](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp)

## Notes

This section will cover some of the common procedures for starting a Node application
    
### How do I start a server?

In the entry-point file, the following code starts a server using Express:
```javascript
const express = require('express');
const app = express();

// Listen to port
app.listen(3000);
```

### How do I handle CSS files in Node?

The typical scenario of using a ```<link rel="stylesheet" href="fileLocation">``` doesn't work the way in Node.  These CSS files are server request and need to be handled as such.  Using the ```express.static()``` method will make these CSS files accessible to the views that are using them:
```javascript
// Static files
app.use(express.static('./public'));
```

In the example above, ```./public``` is the location that contains the CSS files to be used in the project.  More information can be found at the [Express documentation](https://expressjs.com/en/starter/static-files.html)

### How do I set a template engine

After installing the desired template engine, the following line of code will set it and allow it to be used with views within a ```views``` directory:
```javascript
// Set up template engine
app.set('view engine', 'ejs');
```

### How do I set up a controller?

Controllers are part of the MVC architecture and help split up code into logical units.  The following code will set-up a controller in the main entry point for a Node application:

```javascript
// Controllers
const todoController = require('./controllers/todoController');
todoController(app);
```

As the require statement implies, the controller is located in a ```controllers``` directory and the controller code exist inside a JavaScript file.  The controller would need to be exported so that the main entry point can require and use the controller like so:

```javascript
module.exports = (app) => {
    // Addition code...
};
```

### How do I render a view?

Once a template engine is installed and configured at the entry point, a controller file can render a view based on URL.  The first step to to make a ```views``` directory and a view file using the template engine extension.  For example, this todo app, uses [EJS](http://ejs.co/), so an index view would be called ```index.ejs```

Inside the controller, the code to display a view based on a user visiting ```/index``` would look like the following:
```javascript
app.get('/index', (req, res) => {
    res.render('index');
});
```

The ```render()``` method takes the name of the view (without the extension) as a parameter and the HTML within that view is what will be rendered when ```app.get()``` gets */index*

### How do I display data in the view using EJS?

The first step to displaying data in the view is to give it data to render:
```javascript
// Temp data
let myTodos = [
    {todo: 'Go to the gym'},
    {todo: 'Play Diablo III'},
    {todo: 'Practice Node.js'},
    {todo: 'Work on Todo App'},
];
```

This data can then be passed into the ```render()``` function as a 2nd argument:
```javascript
app.get(['/', '/index'], (req, res) => {
    res.render('index', {myTodos});
});
```

Now that the view is rendered and holds data, it can be used within the view file.  The following code creates a list of todos using EJS and the view data:
```html
<ul>
    <% for (let i = 0; i < myTodos.length; i++) { %>
    <li><%= myTodos[i].todo %></li>
    <% } %>
</ul>
```

