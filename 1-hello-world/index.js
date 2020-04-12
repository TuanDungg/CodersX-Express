var express = require('express');

var usersRoute = require('./routes/users.route');

var app = express();

var port = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index', {
        name: 'Dũng'
    });
});

app.use('/users', usersRoute);

app.listen(port, function(){
    console.log('Server listening on port' + port);
});