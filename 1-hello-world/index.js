var express = require('express');
var app = express();
var port = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');


var users = [
    { id: 1, name: 'Dũng'},
    { id: 2, name: 'Tuấn'}
]

app.get('/', function(req, res){
    res.render('index', {
        name: 'Dũng'
    });
});

app.get('/users', function(req, res){
    res.render('users/index', {
        users: users
    });
});

app.get('/users/search', function(req, res){
    var q = req.query.q;
    var matchedUsers = users.filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index', {
        users: matchedUsers
    });
});

app.get('/users/create', function(req, res){
    res.render('users/create');
});

// app.post('/user/create', function(req, res){
//     users.push(req.body);
//     console.log(req.body);
//     res.redirect('/users');
// });

app.post('/users/create', function(req, res){
    users.push(req.body);
    res.redirect('/users')
});

app.listen(port, function(){
    console.log('Server listening on port' + port);
});