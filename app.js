const express = require('express')


const app = express();

app.get('/', (req, res) => {
    res.send('hello world')
}); 


const server = app.listen(3000, (a) => {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`listening on http://${host}:${port}`);
});

