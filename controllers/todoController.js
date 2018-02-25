// Set up Body Parser for POST requests
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded(({extended: false }));

// Temp data
let myTodos = [
    {todo: 'Go to the gym'},
    {todo: 'Play Diablo III'},
    {todo: 'Practice Node.js'},
    {todo: 'Work on Todo App'},
];

module.exports = (app) => {
    app.get(['/', '/index'], (req, res) => {
        res.render('index', {myTodos});
    });

    app.post(['/', '/index'], urlencodedParser, (req, res) => {
        myTodos.push(req.body);
        res.json(myTodos);
    });

    app.delete(['/:todo', '/index/:todo'], (req, res) => {
        myTodos = myTodos.filter((todo) => {
            return todo.todo.replace(/ /g, '-') !== req.params.todo;
        });
        res.json(myTodos);
    });
};

