const express = require('express');
const app = express();

const port = 8000


app.get('/api/test', function(req, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.json({hello: "tesasdaaaaaaa1t"});
});

app.listen(port, function() {
    console.log("Listening to port " + port);
});