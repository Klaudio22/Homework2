const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);

console.log("Now the server is running in url: http://127.0.0.1:3333")