const express = require('express');
const app = express();
app.locals.pretty = true; // 출력되는 코드가 보기 좋게 출력되게 해줌
app.set('view engine', 'jade');
app.set('views', './views'); // 기본적으로 express에서 views 패키지를 views 폴더로 설정되어 있어서 생략이 가능
app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.get('/form', (req, res) => {
    res.render('form');
});

app.get('/form_receiver', (req, res) => {
    var title = req.query.title;
    var description = req.query.description;
    // res.json(req.query);
    res.end(title + ',' + description);
});

app.post('/form_receiver', (req, res) => {
    var title = req.body.title;
    var description = req.body.description;
    // res.json(req.body);
    res.end(title + ',' + description);
});

app.get('/topic/:id', (req, res) => {
    var topics = [
        'Javascript is...',
        'Nodejs is...',
        'Express is...'
    ];
    var output = `
    <a href="/topic?id=0">JavaScript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br><br>
    ${topics[req.params.id]}
    `
    res.send(output);
})

app.get('/topic/:id/:mode', (req, res) => {
    res.send(req.params.id + ',' + req.params.mode);
})

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/template', (req, res) => {
    res.render('temp', {time:Date(), title:'Jade'});
})

app.get('/dynamic', (req, res) => {
    let lis = '';
    for(let i = 0; i < 5; i++) {
        lis = lis + '<li>coding</li>';
    }
    let time = Date();
    let output = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    Hello, Dynamic!
    <ul>
        ${lis}
    </ul>
    ${time}
</body>
</html>`;
    res.send(output);
});
app.get('/route', (req, res) => {
    res.send('Hello Router, <img src="/route.png">');
});
app.get('/login', (req, res) => {
    res.send('<h1>Login please</h1>');
});

app.listen(3000, () => {
    console.log('Connected 3000 port!');
});